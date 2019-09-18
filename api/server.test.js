const server = require('./server');
const request = require('supertest');

describe('The Server', () => {
  describe('GET /', () => {
    it('should run the testing environment', () => {
      expect(process.env.DB_ENV).toBe('testing');
    });
  });
});
