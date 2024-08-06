const knex = require('./knex');
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry'); // Resolve circular dependencies with relations
bookshelf.plugin('visibility'); // Hide/show specific attributes
bookshelf.plugin('virtuals'); // Add virtual (computed) properties

module.exports = bookshelf;
