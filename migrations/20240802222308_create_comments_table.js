// migrations/YYYYMMDDHHMMSS_create_comments_table.js

exports.up = function(knex) {
    return knex.schema.createTable('comments', function(table) {
      table.uuid('comment_id').primary(); // Primary key
      table.uuid('business_id').references('business_id').inTable('businesses').onDelete('CASCADE'); // Foreign key to businesses
      table.uuid('user_id').references('user_id').inTable('users').onDelete('CASCADE'); // Foreign key to users
      table.text('comment').notNullable(); // Comment text
      table.timestamp('timestamp').defaultTo(knex.fn.now()); // Timestamp of when the comment was created
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('comments');
  };
  