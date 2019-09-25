exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        {
          username: 'admin',
          email: 'admin@designyourlife.com',
          password: 'password'
        },
        {
          username: 'cody',
          email: 'cody@designyourlife.com',
          password: 'password'
        },
        {
          username: 'test',
          email: 'test@designyourlife.com',
          password: 'password'
        }
      ]);
    });
};
