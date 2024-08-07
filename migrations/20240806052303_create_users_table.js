// migrations/20240803123456_create_users_table.js
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.uuid('user_id').primary();
      table.string('username').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.enu('user_type', ['admin', 'business_owner', 'regular_user', 'guest']);
      table.string('first_name');
      table.string('last_name');
      table.timestamp('date_registered').defaultTo(knex.fn.now());
      table.timestamp('last_login');
      table.boolean('is_active').defaultTo(true);
      table.string('profile_photo');
      table.string('password_reset_token');
      table.timestamp('password_reset_token_expiry');
      table.string('two_factor_secret');
      table.boolean('is_two_factor_enabled').defaultTo(false);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  