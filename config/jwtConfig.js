module.exports = {
  secret: process.env.JWT_SECRET || 'your_secret_key',
  expiresIn: '1h', // Token expiration time
};
