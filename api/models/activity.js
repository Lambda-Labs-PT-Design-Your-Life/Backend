const db = require('../../database/dbConfig');

module.exports = {
  addActivity,
  deleteActivity,
  updateActivity,
  findAllActivityByUser,
  findAllActivities,
  findActivityByActivityId
};

function addActivity(activity) {
  return db('activities').insert(activity, 'activityId');
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
  console.log(activityId);
  return db('activities')
    .where({ activityId })
    .first();
}

function findAllActivities() {
  return db('activities');
}

function findAllActivityByUser(userId) {
  return db('activities as a')
    .join('users as u', 'u.id', 'a.userId')
    .select(
      'a.activityId',
      'a.userId',
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
