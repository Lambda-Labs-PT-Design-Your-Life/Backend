const activityRouter = require('express').Router();
const Activity = require('../../models/activity');

module.exports = activityRouter;

activityRouter.post('/', (req, res) => {
  let activity = req.body;
  if (
    !activity.userId ||
    !activity.activityName ||
    !activity.category ||
    !activity.duration ||
    !activity.description ||
    !activity.creadtedDate ||
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
        res
          .status(201)
          .json(`activity created activityId: ${activity.activityId}`);
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  }
});
