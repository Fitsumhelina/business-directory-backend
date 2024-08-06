const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./db/knex');
const bookshelf = require('./db/bookshelf');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes');
const businessRoutes = require('./routes/businessRoutes');
const authRoutes = require('./routes/authRoutes');
const roleRoutes = require('./routes/roleRoutes');
const tagRoutes = require('./routes/tagRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');
const commentRoutes = require('./routes/commentRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const businessPhotoRoutes = require('./routes/businessPhotoRoutes');
const permissionRoutes = require('./routes/permissionRoutes');

app.use('/api/users', userRoutes);
app.use('/api/businesses', businessRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/favorites', favoriteRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/business-photos', businessPhotoRoutes);
app.use('/api/permissions', permissionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
