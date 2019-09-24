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

function updateActivity(activityId, activity) {
  return db('activities')
    .where('activityId', activityId)
    .update(activity);
}

function findActivityByActivityId(activityId) {
  return db('activities')
    .where('activityId', activityId)
    .first();
}

function findAllActivityByUser(userId) {
  return db('activities as a')
    .join('users as u', 'u.id', 'a.userId')
    .select(
      'a.activityId',
      'a.activityName',
      'a.category',
      'a.duration',
      'a.description',
      'a.createdDate',
      'a.energyLevel',
      'a.engagementLevel',
      'a.enjoymentLevel',
      'u.username as createdBy'
    )
    .where('a.userId', userId);
}
