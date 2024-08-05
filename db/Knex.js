// db/knex.js

const knex = require('knex');
const knexfile = require('../config/knexfile');

const db = knex(knexfile);

module.exports = db;
