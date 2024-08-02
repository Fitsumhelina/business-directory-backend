const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const businessRoutes = require('./routes/businessRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Public routes
app.use('/api/auth', authRoutes);

// Protected routes
app.use('/api/businesses', authMiddleware.verifyToken, businessRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
