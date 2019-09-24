const activityRouter = require('express').Router();
const Activity = require('../../models/activity');

module.exports = activityRouter;

activityRouter.post('/', (req, res) => {
  let post = req.body;
  if (
    !post.userId ||
    !post.name ||
    !post.category ||
    !post.date ||
    !post.startTime ||
    !post.activityLength ||
    !post.energyLevel ||
    !post.engagementLevel ||
    !post.enjoymentLevel
  ) {
    res.status(400).json({
      message:
        'Post missing properties, post must include userId, name, category, date, startTime, activityLength, energyLevel, engagementLevel, enjoymentLevel'
    });
  } else if (
    post.energyLevel > 10 ||
    post.energyLevel < 0 ||
    post.engagementLevel > 10 ||
    post.engagmentLevel < 0 ||
    post.enjoymentLevel > 10 ||
    post.enjoymentLevel < 0
  ) {
    res.status(400).json({
      message:
        'Post energyLevel, engagementLevel, and enjoymentLevel must be between 0 and 100'
    });
  } else {
    res.status(201).json({ message: 'Post successfull' });
  }
});
