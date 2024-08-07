const bookshelf = require('../db/bookshelf');

const BusinessPhoto = bookshelf.model('BusinessPhoto', {
  tableName: 'business_photos',
  idAttribute: 'photo_id',
  hasTimestamps: ['uploaded_at'],
  business() {
    return this.belongsTo('Business', 'business_id');
  }
});

module.exports = BusinessPhoto;
