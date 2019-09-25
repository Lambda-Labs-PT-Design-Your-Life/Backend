const db = require('../../database/dbConfig');

module.exports = {
  addReflection,
  deleteReflection,
  updateReflection,
  findAllReflectionsByUser,
  findReflectionByReflectionId,
  finddAllReflections
};

async function addReflection(reflection) {
  const [reflectionId] = await db('reflections').insert(reflection);
  return findReflectionByReflectionId(reflectionId);
}

function findReflectionByReflectionId(reflectionId) {
  return db('reflections')
    .where({ reflectionId })
    .first();
}

function deleteReflection(reflectionId) {
  return db('reflections')
    .where({ reflectionId })
    .del();
}

function updateReflection(reflectionId, reflection) {
  return db('reflections')
    .where('reflectionId', reflectionId)
    .update(reflection);
}

function findAllReflectionsByUser(userId) {
  return db('reflections as r')
    .join('users as u', 'u.id', 'r.userId')
    .select('');
}

function finddAllReflections() {
  return db('reflections');
}
