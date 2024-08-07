// migrations/YYYYMMDDHHMMSS_create_permissions_table.js

exports.up = function(knex) {
    return knex.schema.createTable('permissions', function(table) {
      table.uuid('permission_id').primary();
      table.string('name').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('permissions');
  };
  