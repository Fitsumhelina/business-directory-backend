// services/favoriteService.js
const Favorite = require('../models/Favorite');

async function addFavorite(userId, businessId) {
  try {
    const favorite = await Favorite.forge({ user_id: userId, business_id: businessId }).save();
    return favorite;
  } catch (error) {
    console.error('Error adding favorite:', error);
    throw error;
  }
}

async function getFavoritesByUser(userId) {
  try {
    const favorites = await Favorite.where({ user_id: userId }).fetchAll();
    return favorites;
  } catch (error) {
    console.error('Error fetching favorites:', error);
    throw error;
  }
}

async function removeFavorite(userId, businessId) {
  try {
    const favorite = await Favorite.where({ user_id: userId, business_id: businessId }).fetch({ require: true });
    await favorite.destroy();
    return favorite;
  } catch (error) {
    console.error('Error removing favorite:', error);
    throw error;
  }
}

module.exports = {
  addFavorite,
  getFavoritesByUser,
  removeFavorite
};
