const request = require('supertest');
const server = require('../server');
const jwt = require('jsonwebtoken');
const db = require('../../../database/dbConfig');

xdescribe('The Activities Router', () => {
  beforeEach(async (req, res) => {
    const user = {
      username: 'testUser',
      password: 'testingPassword'
    };
    await request(server)
      .post('/api/auth/login')
      .send(user);
    req.headers.authorization = req.token;
  });

  describe('Post /api/activity/', () => {
    it('should return a 400 when missing any the userID', async () => {
      const missingUserId = {
        name: 'coding homework',
        category: 'programming',
        date: '09/23/2019',
        startTime: '02:25PM',
        activityLength: '1hr',
        energyLevel: 5,
        engagementLevel: 8,
        enjoymentLevel: 8
      };
      const missingUserIdRes = await request(server)
        .post('/api/activity')
        .send(missingUserId);
      expect(missingUserIdRes.status).toBe(400);
    });
  });
});
