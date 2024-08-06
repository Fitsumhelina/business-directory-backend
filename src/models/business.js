// models/Business.js

const bookshelf = require('../db/bookshelf');

const Business = bookshelf.model('Business', {
  tableName: 'businesses',
  idAttribute: 'business_id',
  hasTimestamps: ['created_at', 'updated_at'],
  owner() {
    return this.belongsTo('User', 'owner_id');
  },
  photos() {
    return this.hasMany('BusinessPhoto', 'business_id');
  },
  tags() {
    return this.belongsToMany('Tag', 'business_tags', 'business_id', 'tag_id');
  },
  favorites() {
    return this.hasMany('Favorite', 'business_id');
  },
  comments() {
    return this.hasMany('Comment', 'business_id');
  },
  ratings() {
    return this.hasMany('Rating', 'business_id');
  }
});

module.exports = Business;
