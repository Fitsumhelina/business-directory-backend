// migrations/YYYYMMDDHHMMSS_create_ratings_table.js

exports.up = function(knex) {
    return knex.schema.createTable('ratings', function(table) {
      table.uuid('rating_id').primary(); // Primary key
      table.uuid('business_id').references('business_id').inTable('businesses').onDelete('CASCADE'); // Foreign key to businesses
      table.uuid('user_id').references('user_id').inTable('users').onDelete('CASCADE'); // Foreign key to users
      table.integer('rating').notNullable(); // Rating value
      table.text('comment'); // Optional comment
      table.timestamp('timestamp').defaultTo(knex.fn.now()); // Timestamp of when the rating was created
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('ratings');
  };
  