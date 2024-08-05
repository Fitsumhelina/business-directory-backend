// controllers/roleController.js
const roleService = require('../services/roleService');

async function createRole(req, res) {
  try {
    const role = await roleService.createRole(req.body);
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ error: 'Error creating role' });
  }
}

async function getRole(req, res) {
  try {
    const role = await roleService.getRoleById(req.params.id);
    if (role) {
      res.json(role);
    } else {
      res.status(404).json({ error: 'Role not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching role' });
  }
}

async function updateRole(req, res) {
  try {
    const role = await roleService.updateRole(req.params.id, req.body);
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: 'Error updating role' });
  }
}

async function deleteRole(req, res) {
  try {
    const role = await roleService.deleteRole(req.params.id);
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting role' });
  }
}

module.exports = {
  createRole,
  getRole,
  updateRole,
  deleteRole
};
