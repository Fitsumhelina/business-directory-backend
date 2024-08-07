require('dotenv').config(); // Load environment variables

const knex = require('knex')({
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
