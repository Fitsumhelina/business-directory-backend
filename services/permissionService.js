// services/permissionService.js
const Permission = require('../models/Permission');

async function createPermission(data) {
  try {
    const permission = await Permission.forge(data).save();
    return permission;
  } catch (error) {
    console.error('Error creating permission:', error);
    throw error;
  }
}

async function getPermissionsByRole(roleId) {
  try {
    const permissions = await Permission.where({ role_id: roleId }).fetchAll();
    return permissions;
  } catch (error) {
    console.error('Error fetching permissions:', error);
    throw error;
  }
}

module.exports = {
  createPermission,
  getPermissionsByRole
};