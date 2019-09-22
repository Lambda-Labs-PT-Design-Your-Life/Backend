const db = require('../database/dbConfig.js');

module.exports = {
  addUser,
  findUser,
  findUserBy
};

async function addUser(user) {
  const [id] = await db('users').insert(user);

  return findBy(id);
}
function findUser() {}
function findUserBy(typeString, type) {
  return db('users')
    .where({ type })
    .first();
}
