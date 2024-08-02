// migrations/YYYYMMDDHHMMSS_create_role_permissions_table.js

exports.up = function(knex) {
    return knex.schema.createTable('role_permissions', function(table) {
      table.uuid('role_id').references('role_id').inTable('roles').onDelete('CASCADE'); // Adjust column name to match roles table
      table.uuid('permission_id').references('permission_id').inTable('permissions').onDelete('CASCADE');
      table.primary(['role_id', 'permission_id']);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('role_permissions');
  };
  