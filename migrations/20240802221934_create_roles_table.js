// migrations/YYYYMMDDHHMMSS_create_roles_table.js

exports.up = function(knex) {
    return knex.schema.createTable('roles', function(table) {
      table.uuid('role_id').primary(); // Primary key
      table.string('role_name').notNullable(); // Role name
      table.text('description'); // Description of the role
      table.timestamp('created_at').defaultTo(knex.fn.now()); // Timestamp of creation
      table.timestamp('updated_at').defaultTo(knex.fn.now()); // Timestamp of last update
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('roles');
  };
  