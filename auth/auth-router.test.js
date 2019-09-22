const request = require('supertest');
const jwt = require('jsonwebtoken');
const server = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.from('users').truncate();
});

describe('POST /register', () => {
  it('should return a 400 when missing username', async () => {
    const missingUsername = {
      password: 'password123',
      email: 'email@email.com'
    };

    const missingUsernameRes = await request(server)
      .post('/api/auth/register')
      .send(missingUsername);

    expect(missingUsernameRes.status).toBe(400);
  });
  it('should return a 400 when email is missing', async () => {
    const missingEmail = {
      username: 'testingUser',
      password: 'testingPassword'
    };
    const missingEmailRes = await request(server)
      .post('/api/auth/register')
      .send(missingEmail);
    expect(missingEmailRes.status).toBe(400);
  });
  it('should return a 400 when password is missing', async () => {
    const missingPassword = {
      username: 'testingUser',
      email: 'testing@designyourlife.com'
    };
    const missingPasswordRes = await request(server)
      .post('/api/auth/register')
      .send(missingPassword);
    expect(missingPasswordRes.status).toBe(400);
  });
  it('should return a 201 when successfully created', async () => {
    const user = {
      username: 'testUser',
      password: 'testPassword',
      email: 'testEmail@designyourlife.com'
    };
    const res = await request(server)
      .post('/api/auth/register')
      .send(user);
    expect(res.status).toBe(201);
  });
  it('should successfully register a new user', async () => {
    const user = {
      username: 'testUser',
      password: 'testPassword',
      email: 'testEmail@designyourlife.com'
    };
    const res = await request(server)
      .post('/api/auth/register')
      .send(user);
    const users = await db.select('*').from('users');
    expect(users.length).toBe(1);
    expect(users[0].username).toBe('testUser');
    expect(users[0].email).toBe('testEmail@designyourlife.com');
    expect(users[0].password).not.toBe(null || undefined);
  });
  it('Password Should be hashed and not be stored in the database in plain text', async () => {
    const user = {
      username: 'testUser',
      password: 'testPassword',
      email: 'testEmail@designyourlife.com'
    };
    const res = await request(server)
      .post('/api/auth/register')
      .send(user);
    const users = await db.select('*').from('users');
    expect(users.length).toBe(1);
    expect(users[0].password).not.toBe('testPassword');
  });
});

describe('POST /login', () => {
  beforeEach(async () => {
    await request(server)
      .post('/api/auth/register')
      .send({
        username: 'testUser',
        email: 'testing@designyourlife.com',
        password: 'testingPassword'
      });
  });

  it('should return 200 when a user succesfully logs in', async () => {
    const res = await request(server).post('/api/auth/login')
    expect(res.status).toBe(200);
  })
});
