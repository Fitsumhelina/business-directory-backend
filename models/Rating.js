const bookshelf = require('../db/bookshelf');

const Rating = bookshelf.model('Rating', {
  tableName: 'ratings',
  idAttribute: 'rating_id',
  hasTimestamps: ['timestamp'],
  user() {
    return this.belongsTo('User', 'user_id');
  },
  business() {
    return this.belongsTo('Business', 'business_id');
  }
});

module.exports = Rating;
