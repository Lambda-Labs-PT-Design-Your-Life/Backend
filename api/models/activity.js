const db = require('../../database/dbConfig');

module.exports = {
  addActivity,
  deleteActivity,
  updateActivity,
  findAllActivityByUser,
  findActivityByActivityId
};

async function addActivity(activity) {
  const [activityId] = await db('activities').insert(activity);

  return findActivityByActivityId(activityId);
}

function deleteActivity(activityId) {
  return db('activities')
    .where({ activityId })
    .del();
}

function updateActivity(activityId, changes) {
  return db('activities')
    .where({ activityId })
    .update(changes);
}

function findActivityByActivityId(activityId) {
  return db('activities')
    .where({ activityId })
    .first();
}

function findAllActivityByUser(userId) {
  return db('activities as a')
    .join('users as u', 'u.id', 'a.user_id')
    .select('a.activityId', 'a.name', 'u.username as createdBy')
    .where('a.userId', userId);
}
