const bookshelf = require('../db/bookshelf');

const User = bookshelf.model('User', {
  tableName: 'users',
  idAttribute: 'user_id',
  hasTimestamps: ['date_registered', 'last_login'],
  businesses() {
    return this.hasMany('Business', 'owner_id');
  },
  favorites() {
    return this.hasMany('Favorite', 'user_id');
  },
  comments() {
    return this.hasMany('Comment', 'user_id');
  },
  ratings() {
    return this.hasMany('Rating', 'user_id');
  }
});

module.exports = User;
