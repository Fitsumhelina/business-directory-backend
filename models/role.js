const bookshelf = require('../db/bookshelf');

const Role = bookshelf.model('Role', {
  tableName: 'roles',
  idAttribute: 'role_id',
  hasTimestamps: ['created_at', 'updated_at'],
  permissions() {
    return this.belongsToMany('Permission', 'role_permissions', 'role_id', 'permission_id');
  }
});

module.exports = Role;
