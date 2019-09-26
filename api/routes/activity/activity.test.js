const request = require('supertest');
const server = require('../../server');
const jwt = require('jsonwebtoken');
const db = require('../../../database/dbConfig ');

xdescribe('The Activities Router', () => {
  beforeEach(async (req, res) => {
    const user = {
      username: 'testUser',
      password: 'testingPassword'
    };
    await request(server)
      .post('/api/auth/login')
      .send(user);
  });

  describe('Post /api/activity/', () => {
    it('should return a 400 when missing any the userID', async () => {
      const missingUserId = {
        activityName: 'coding homework',
        category: 'programming',
        duration: '1 hour',
        description: 'programming for school',
        createdDate: '09/23/2019',
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
