// migrations/YYYYMMDDHHMMSS_create_tags_table.js

exports.up = function(knex) {
    return knex.schema.createTable('tags', function(table) {
      table.uuid('tag_id').primary(); // Primary key
      table.string('tag_name').notNullable(); // Tag name
      table.text('description'); // Description of the tag
      table.timestamp('created_at').defaultTo(knex.fn.now()); // Timestamp of creation
      table.timestamp('updated_at').defaultTo(knex.fn.now()); // Timestamp of last update
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tags');
  };
  