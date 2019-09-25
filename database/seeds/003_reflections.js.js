exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reflections')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('reflections').insert([
        {
          userId: 10,
          week: 'One',
          reflectionText: 'Balance of exercise and tv',
          insights:
            'I really liked running to relieve stress and watching tv to relax',
          trends: "I'm much happier when I exercise",
          timestamp: '2019-09-25T08:43:10.453Z'
        },
        {
          userId: 11,
          week: 'One',
          reflectionText:
            'I need to find time for coding and balance that with exercise',
          insights: 'Hiking is my favorite way to exercise',
          trends: 'I journaled after fun exercise like hiking',
          timestamp: '2019-09-25T16:40:10.451Z'
        },
        {
          userId: 12,
          week: 'One',
          reflectionText: 'I spent a lot of time exercising and watching tv',
          insights: 'Watching TV is a slippery slope',
          trends:
            'watched tv and movies instead of spending more time with friends',
          timestamp: '2019-09-25T18:40:10.451Z'
        }
      ]);
    });
};
