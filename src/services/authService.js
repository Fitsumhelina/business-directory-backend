// services/authService.js
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

async function registerUser(data) {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await User.forge({ ...data, password: hashedPassword }).save();
    return newUser;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

async function authenticateUser(email, password) {
  try {
    const user = await User.where({ email }).fetch();
    if (user && await bcrypt.compare(password, user.get('password'))) {
      const token = jwt.sign({ user_id: user.get('user_id') }, JWT_SECRET, { expiresIn: '1h' });
      return { user, token };
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
}

module.exports = {
  registerUser,
  authenticateUser
};
