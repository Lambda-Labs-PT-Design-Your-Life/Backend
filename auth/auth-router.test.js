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
});
