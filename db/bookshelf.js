// db/bookshelf.js

const knex = require('./Knex');
const bookshelf = require('bookshelf')(knex);
const uuid = require('uuid');

bookshelf.plugin('registry');
bookshelf.plugin({
  initialize: function() {
    this.on('creating', model => {
      if (!model.id) {
        model.set(model.idAttribute, uuid.v4());
      }
    });
  }
});

module.exports = bookshelf;
