const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

exports.verifyToken = (req, res, next) => {
  // Get the token from the Authorization header
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).json({ message: 'No token provided' });
  }

  // Split the Bearer from the token
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  // Verify the token
  jwt.verify(token, jwtConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to authenticate token' });
    }

    // Store user ID in request for use in other routes
    req.userId = decoded.id;
    next();
  });
};
