// knexfile.js
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    production: {
      client: 'pg',
      connection: {
        host: process.env.PROD_DB_HOST,
        port: process.env.PROD_DB_PORT,
        user: process.env.PROD_DB_USER,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME
      }
    },
    migrations: {
      directory: './migrations'
    }
  },
  // Add configurations for other environments if needed
};
