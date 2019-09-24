const activityRouter = require('express').Router();
const Activity = require('../../models/activity');

module.exports = activityRouter;

activityRouter.post('/', (req, res) => {
  const activity = req.body;
  if (
    !activity.userId ||
    !activity.activityName ||
    !activity.category ||
    !activity.duration ||
    !activity.description ||
    !activity.createdDate ||
    !activity.energyLevel ||
    !activity.engagementLevel ||
    !activity.enjoymentLevel
  ) {
    res.status(400).json({
      message:
        'Post missing properties, post must include userId activityName category duration description creadtedDate energyLevel engagementLevel enjoymentLevel'
    });
  } else if (
    activity.energyLevel > 10 ||
    activity.energyLevel < 0 ||
    activity.engagementLevel > 10 ||
    activity.engagmentLevel < 0 ||
    activity.enjoymentLevel > 10 ||
    activity.enjoymentLevel < 0
  ) {
    res.status(400).json({
      message:
        'Post energyLevel, engagementLevel, and enjoymentLevel must be between 0 and 100'
    });
  } else {
    Activity.addActivity(activity)
      .then(activity => {
        res.status(201).json({ createdActivity: activity });
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  }
});

activityRouter.get('/:actvityId', (req, res) => {
  const { activityId } = req.params;

  Activity.findActivityByActivityId(activityId)
    .then(activity => {
      if (!activity) {
        res
          .status(404)
          .json({ message: 'No activty by that Activity Id in the Database' });
      } else {
        res.status(200).json(activity);
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

activityRouter.get('/user/:userId', (req, res) => {
  const { userId } = req.params;

  Activity.findAllActivityByUser(userId)
    .then(activitiesByUser => {
      if (!activitiesByUser) {
        res.status(404).json({ message: 'No Activites by that user' });
      } else {
        res.status(200).json(activitiesByUser);
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

activityRouter.delete('/:activityId', (req, res) => {
  const { activityId } = req.params;
  Activity.deleteActivity(activityId)
    .then(activity => {
      if (!activity) {
        res.status(404).json({ message: 'No activity by that activityId' });
      } else {
        res.status(200).json({ message: 'activity deleted' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

activityRouter.put('/:activityId', (req, res) => {
  const { activityId } = req.params;
  const { activity } = req.body;

  Activity.updateActivity(activityId, activity)
    .then(activity => {
      if (!activity) {
        res.status(404).json({ message: 'No activity by that id' });
      } else {
        res.status(200).json({ message: 'activity updated' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

activityRouter.get('/activities', (req, res) => {
  Activity.findAllActivities()
    .then(activities => {
      if (!activities) {
        res.status(404).json({ message: 'No activities' });
      } else {
        res.status(200).json(activities);
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});
