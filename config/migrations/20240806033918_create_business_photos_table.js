// migrations/YYYYMMDDHHMMSS_create_business_photos_table.js

exports.up = function(knex) {
    return knex.schema.createTable('business_photos', function(table) {
      table.uuid('photo_id').primary(); // Primary key
      table.uuid('business_id').references('business_id').inTable('businesses').onDelete('CASCADE'); // Foreign key to businesses
      table.string('photo_url').notNullable(); // URL of the photo
      table.timestamp('uploaded_at').defaultTo(knex.fn.now()); // Timestamp of when the photo was uploaded
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('business_photos');
  };
  