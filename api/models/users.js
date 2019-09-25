const db = require('../../database/dbConfig.js');

module.exports = {
  addUser,
  findUserByUsername,
  findUserById
};

async function addUser(user) {
  return db('users').insert(user, id);
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
