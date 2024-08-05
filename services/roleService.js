// services/roleService.js
const Role = require('../models/Role');

async function createRole(data) {
  try {
    const role = await Role.forge(data).save();
    return role;
  } catch (error) {
    console.error('Error creating role:', error);
    throw error;
  }
}

async function getRoleById(id) {
  try {
    const role = await Role.where({ role_id: id }).fetch();
    return role;
  } catch (error) {
    console.error('Error fetching role:', error);
    throw error;
  }
}

async function updateRole(id, data) {
  try {
    const role = await Role.where({ role_id: id }).fetch({ require: true });
    await role.save(data, { patch: true });
    return role;
  } catch (error) {
    console.error('Error updating role:', error);
    throw error;
  }
}

async function deleteRole(id) {
  try {
    const role = await Role.where({ role_id: id }).fetch({ require: true });
    await role.destroy();
    return role;
  } catch (error) {
    console.error('Error deleting role:', error);
    throw error;
  }
}

module.exports = {
  createRole,
  getRoleById,
  updateRole,
  deleteRole
};
