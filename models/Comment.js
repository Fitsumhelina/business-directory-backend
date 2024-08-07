const bookshelf = require('../db/bookshelf');

const Comment = bookshelf.model('Comment', {
  tableName: 'comments',
  idAttribute: 'comment_id',
  hasTimestamps: ['timestamp'],
  user() {
    return this.belongsTo('User', 'user_id');
  },
  business() {
    return this.belongsTo('Business', 'business_id');
  }
});

module.exports = Comment;
