// controllers/favoriteController.js
const favoriteService = require('../services/favoriteService');

async function addFavorite(req, res) {
  try {
    const favorite = await favoriteService.addFavorite(req.body.userId, req.body.businessId);
    res.status(201).json(favorite);
  } catch (error) {
    res.status(500).json({ error: 'Error adding favorite' });
  }
}

async function getFavorites(req, res) {
  try {
    const favorites = await favoriteService.getFavoritesByUser(req.params.userId);
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching favorites' });
  }
}

async function removeFavorite(req, res) {
  try {
    const favorite = await favoriteService.removeFavorite(req.params.userId, req.params.businessId);
    res.json(favorite);
  } catch (error) {
    res.status(500).json({ error: 'Error removing favorite' });
  }
}

module.exports = {
  addFavorite,
  getFavorites,
  removeFavorite
};