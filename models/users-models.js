const db = require('../database/dbConfig.js');

module.exports = {
  addUser,
  findUserByUsername,
  findUserById
};

async function addUser(user) {
  const [id] = await db('users').insert(user);

  return findUserById(id);
}
function findUserByUsername(username) {
  return db('users')
    .where('username', username)
    .first();
}
function findUserById(id) {
  return db('users')
    .where({ id })
    .first();
}
