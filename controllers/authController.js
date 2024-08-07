// controllers/authController.js
const authService = require('../services/authService');

async function register(req, res) {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.authenticateUser(email, password);
    res.json({ user, token });
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
}

module.exports = {
  register,
  login
};