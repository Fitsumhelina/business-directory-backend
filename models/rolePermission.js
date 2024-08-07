const bookshelf = require('../db/bookshelf');

const RolePermission = bookshelf.model('RolePermission', {
  tableName: 'role_permissions',
  role() {
    return this.belongsTo('Role', 'role_id');
  },
  permission() {
    return this.belongsTo('Permission', 'permission_id');
  }
});

module.exports = RolePermission;
