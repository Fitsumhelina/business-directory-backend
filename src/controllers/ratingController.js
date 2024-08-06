// controllers/ratingController.js
const ratingService = require('../services/ratingService');

async function createRating(req, res) {
  try {
    const rating = await ratingService.createRating(req.body);
    res.status(201).json(rating);
  } catch (error) {
    res.status(500).json({ error: 'Error creating rating' });
  }
}

async function getRatings(req, res) {
  try {
    const ratings = await ratingService.getRatingsByBusiness(req.params.businessId);
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching ratings' });
  }
}

async function updateRating(req, res) {
  try {
    const rating = await ratingService.updateRating(req.params.id, req.body);
    res.json(rating);
  } catch (error) {
    res.status(500).json({ error: 'Error updating rating' });
  }
}

async function deleteRating(req, res) {
  try {
    const rating = await ratingService.deleteRating(req.params.id);
    res.json(rating);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting rating' });
  }
}

module.exports = {
  createRating,
  getRatings,
  updateRating,
  deleteRating
};
