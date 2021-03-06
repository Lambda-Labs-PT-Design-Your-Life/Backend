const db = require('../../database/dbConfig');
const Activity = require('./activity');

describe('Activities Model', () => {
  beforeEach(async (req, res) => {
    await db('activities').truncate();
  });

  describe('The addActivity function', () => {
    it('should add the activity to the database', async () => {
      const postData = {
        userId: 1,
        activityName: 'coding homework',
        category: 'programming',
        duration: '1 hour',
        description: 'programming for school',
        createdDate: '09/23/2019',
        energyLevel: 5,
        engagementLevel: 8,
        enjoymentLevel: 8
      };
      const post = await Activity.addActivity(postData);

      const posts = await db('activities');
      expect(posts.length).toBe(1);
    });
  });
});
