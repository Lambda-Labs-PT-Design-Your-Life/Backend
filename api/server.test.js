const server = require('./server');
const request = require('supertest');

describe('The Server', () => {
  describe('GET /', () => {
    it('should run the testing environment', () => {
      expect(process.env.DB_ENV).toBe('testing');
    });
    it('should return a 200 on the index route', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    })
  });
});
