exports.up = function(knex) {
  return knex.schema.createTable('reflections', reflections => {
    //reflectionId autoincrements
    reflections.increments('reflectionId');
    //userId of the user that created the reflections
    reflections.integer('userId').notNullable();
    //relectionDate
    reflections.date('reflectionDate').notNullable();
    //reflectionText
    reflections.text('reflectionText').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reflections');
};
