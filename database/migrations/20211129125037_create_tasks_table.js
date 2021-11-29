
exports.up = function(knex) {
  return knex.schema.createTable('tasks', col => {
    col.increments('id')
    col.string('title').notNullable()
    col.string('description').nullable()
    col.timestamp('due_date').nullable()
    col.timestamp('created_at').defaultTo(knex.fn.now())
    col.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tasks');
};
