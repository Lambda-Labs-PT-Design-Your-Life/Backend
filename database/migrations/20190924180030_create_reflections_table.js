exports.up = function(knex) {
  return knex.schema.createTable('reflections', reflections => {
    //reflectionId autoincrements
    reflections.increments('reflectionId');
    //userId of the user that created the reflections
    reflections.integer('userId').notNullable();
    //week of the reflection
    reflections.string('week', 32).notNullable();
    //reflection text
    reflections.text('reflectionText').notNullable();
    //insights
    reflections.text('insights').notNullable();
    //trends
    reflections.text('trends').notNullable();
    reflections.timestamp('timestamp').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reflections');
};
