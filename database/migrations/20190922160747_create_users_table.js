exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    //userID Auto Increments
    users.increments();
    //username
    users
      .string('username', 255)
      .notNullable()
      .unique();
    //email
    users
      .string('email', 254)
      .notNullable()
      .unique();

    //password
    users.string('password', 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
