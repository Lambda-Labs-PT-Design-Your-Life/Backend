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
});
