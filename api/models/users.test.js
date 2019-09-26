const db = require('../../database/dbConfig');
const Users = require('./users');

describe('Users Model', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  describe('The addUser function', () => {
    it('should add the user to the database', async () => {
      const userData = {
        username: 'test',
        email: 'test@test.com',
        password: 'test'
      };
      const user = await Users.addUser(userData);

      const users = await db('users');
      expect(users.length).toBe(1);
      expect(users[0].username).toBe('test');
      expect(users[0].email).toBe('test@test.com');
    });
  });
  describe('The findUserByUsername function', () => {
    it('should return the matching user', async () => {
      const userData = {
        username: 'test',
        email: 'test@test.com',
        password: 'test'
      };
      const user = await Users.addUser(userData);

      const username = 'test';
      const foundUser = await Users.findUserByUsername(username);

      expect(foundUser.username).toBe('test');
    });
  });
});
