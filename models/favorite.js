const bookshelf = require('../db/bookshelf');

const Favorite = bookshelf.model('Favorite', {
  tableName: 'favorites',
  idAttribute: 'favorite_id',
  hasTimestamps: ['timestamp'],
  user() {
    return this.belongsTo('User', 'user_id');
  },
  business() {
    return this.belongsTo('Business', 'business_id');
  }
});

module.exports = Favorite;
