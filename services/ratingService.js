// services/ratingService.js
const Rating = require('../models/Rating');

async function createRating(data) {
  try {
    const rating = await Rating.forge(data).save();
    return rating;
  } catch (error) {
    console.error('Error creating rating:', error);
    throw error;
  }
}

async function getRatingsByBusiness(businessId) {
  try {
    const ratings = await Rating.where({ business_id: businessId }).fetchAll();
    return ratings;
  } catch (error) {
    console.error('Error fetching ratings:', error);
    throw error;
  }
}

async function getAverageRating(businessId) {
  try {
    const ratings = await Rating.where({ business_id: businessId }).fetchAll();
    const average = ratings.reduce((acc, rating) => acc + rating.get('rating'), 0) / ratings.length;
    return average;
  } catch (error) {
    console.error('Error calculating average rating:', error);
    throw error;
  }
}

module.exports = {
  createRating,
  getRatingsByBusiness,
  getAverageRating
};
