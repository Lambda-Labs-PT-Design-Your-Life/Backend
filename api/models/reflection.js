const db = require('../../database/dbConfig');

module.exports = {
  addReflection,
  deleteReflection,
  updateReflection,
  findAllReflectionsByUser,
  findReflectionByReflectionId,
  finddAllReflections
};

function addReflection(reflection) {
  return db('reflections').insert(reflection, 'reflectionId');
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
  console.log(userId);
  return db('reflections').where('userId', userId);
}

function finddAllReflections() {
  return db('reflections');
}
