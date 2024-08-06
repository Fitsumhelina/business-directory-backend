// services/userService.js
const User = require('../models/user');

async function createUser(data) {
  try {
    const user = await User.forge(data).save();
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

async function getUserById(id) {
  try {
    const user = await User.where({ user_id: id }).fetch();
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

async function updateUser(id, data) {
  try {
    const user = await User.where({ user_id: id }).fetch({ require: true });
    await user.save(data, { patch: true });
    return user;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

async function deleteUser(id) {
  try {
    const user = await User.where({ user_id: id }).fetch({ require: true });
    await user.destroy();
    return user;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser
};
