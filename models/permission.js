// models/Permission.js

const bookshelf = require('../db/bookshelf');

const Permission = bookshelf.model('Permission', {
  tableName: 'permissions',
  idAttribute: 'permission_id',
  hasTimestamps: ['created_at'],
  roles() {
    return this.belongsToMany('Role', 'role_permissions', 'permission_id', 'role_id');
  }
});

module.exports = Permission;
