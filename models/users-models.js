const db = require('../database/dbConfig.js');

module.exports = {
  addUser,
  findUser,
  findUserById
};

async function addUser(user) {
  const [id] = await db('users').insert(user);

  return findUserById(id);
}
function findUser() {}
function findUserById(id) {
  return db('users')
    .where({ id })
    .first();
}
