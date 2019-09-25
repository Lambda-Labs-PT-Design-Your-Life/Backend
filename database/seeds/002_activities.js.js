exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activities')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('activities').insert([
        {
          userId: 1,
          activityName: 'Running',
          category: 'Exercise',
          duration: '1 hour',
          description: 'Ran on trail at park',
          createdDate: '09/24/2019',
          enjoymentLevel: 4,
          energyLevel: 3,
          engagementLevel: 4
        },
        {
          userId: 1,
          activityName: 'TV',
          category: 'Entertainment',
          duration: '30 Minutes',
          description: 'Watched The League',
          createdDate: '09/24/2019',
          enjoymentLevel: 9,
          energyLevel: 3,
          engagementLevel: 7
        },
        {
          userId: 2,
          activityName: 'Biking',
          category: 'Exercise',
          duration: '30 minutes',
          description: 'Biked on trail at park',
          createdDate: '09/24/2019',
          enjoymentLevel: 7,
          energyLevel: 5,
          engagementLevel: 8
        },
        {
          userId: 2,
          activityName: 'Video Games',
          category: 'Entertainment',
          duration: '1 hour',
          description: 'Played Bioshock Infinite',
          createdDate: '09/24/2019',
          enjoymentLevel: 9,
          energyLevel: 3,
          engagementLevel: 8
        },
        {
          userId: 2,
          activityName: 'Hiking',
          category: 'Exercise',
          duration: '1 hour',
          description: 'Hiked in national park',
          createdDate: '09/24/2019',
          enjoymentLevel: 6,
          energyLevel: 6,
          engagementLevel: 7
        },
        {
          userId: 2,
          activityName: 'Journaling',
          category: 'Mindfullness',
          duration: '20 Minutes',
          description: 'Journaled about my day',
          createdDate: '09/24/2019',
          enjoymentLevel: 4,
          energyLevel: 3,
          engagementLevel: 4
        },
        {
          userId: 3,
          activityName: 'Running',
          category: 'Exercise',
          duration: '1 hour',
          description: 'Ran on trail at park',
          createdDate: '09/24/2019',
          enjoymentLevel: 4,
          energyLevel: 3,
          engagementLevel: 4
        },
        {
          userId: 3,
          activityName: 'Hiking',
          category: 'Exercise',
          duration: '2 hours',
          description: 'Hiked at national park',
          createdDate: '09/24/2019',
          enjoymentLevel: 4,
          energyLevel: 3,
          engagementLevel: 4
        },
        {
          userId: 3,
          activityName: 'Cleaned',
          category: 'Chores',
          duration: '30 minutes',
          description: 'Cleaned up house',
          createdDate: '09/24/2019',
          enjoymentLevel: 4,
          energyLevel: 5,
          engagementLevel: 7
        },
        {
          userId: 3,
          activityName: 'Video Games',
          category: 'Entertainment',
          duration: '1 hour',
          description: 'Played The Witcher 3',
          createdDate: '09/24/2019',
          enjoymentLevel: 8,
          energyLevel: 6,
          engagementLevel: 8
        },
        {
          userId: 3,
          activityName: 'Movie',
          category: 'Entertainment',
          duration: '1 hour 30 minutes',
          description: 'Watched Blazing Saddles',
          createdDate: '09/24/2019',
          enjoymentLevel: 4,
          energyLevel: 3,
          engagementLevel: 4
        },
        {
          userId: 3,
          activityName: 'TV',
          category: 'Entertainment',
          duration: '3 hours',
          description: 'Watched Stranger Things',
          createdDate: '09/24/2019',
          enjoymentLevel: 7,
          energyLevel: 5,
          engagementLevel: 8
        }
      ]);
    });
};
