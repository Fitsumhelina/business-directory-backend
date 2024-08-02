// migrations/August_3_2024_create_businessess_table.js

exports.up = function(knex) {
    return knex.schema.createTable('businesses', function(table) {
      table.uuid('business_id').primary();
      table.uuid('owner_id').references('user_id').inTable('users').onDelete('CASCADE');
      table.string('business_name').notNullable();
      table.string('brand_name');
      table.string('business_license_number');
      table.text('business_address');
      table.string('business_phone');
      table.boolean('verified').defaultTo(false);
      table.time('opening_time');
      table.time('closing_time');
      table.decimal('latitude', 9, 6);
      table.decimal('longitude', 9, 6); // Add longitude field
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('businesses');
  };
  