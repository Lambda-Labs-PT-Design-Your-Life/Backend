exports.up = function(knex) {
  return knex.schema.createTable('activities', activities => {
    //activityID Auto Increments
    activities.increments('activityId');
    //userId of the user that created the activity
    activities.integer('userId').notNullable();
    //activity name
    activities.string('activityName', 255).notNullable();
    //category
    activities.string('category', 255).notNullable();
    //duration
    activities.string('duration', 255).notNullable();
    //description
    activities.text('description').notNullable();
    //createdDate
    activities.date('createdDate').notNullable();
    //energyLevel
    activities.integer('energyLevel').notNullable();
    //engagementLevel
    activities.integer('enjoymentLevel').notNullable();
    //enjoymentLevel
    activities.integer('engagementLevel').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('activities');
};
