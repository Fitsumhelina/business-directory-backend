require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432, // Fallback to default port if not set
});

client.connect()
  .then(() => console.log('Connected successfully'))
  .catch(err => console.error('Connection error', err))
  .finally(() => client.end());
