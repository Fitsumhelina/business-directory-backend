// models/Tag.js

const bookshelf = require('../db/bookshelf');

const Tag = bookshelf.model('Tag', {
  tableName: 'tags',
  idAttribute: 'tag_id',
  hasTimestamps: ['created_at', 'updated_at'],
  businesses() {
    return this.belongsToMany('Business', 'business_tags', 'tag_id', 'business_id');
  }
});

module.exports = Tag;
