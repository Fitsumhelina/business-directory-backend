// controllers/businessController.js
const businessService = require('../services/businessService');

async function createBusiness(req, res) {
  try {
    const business = await businessService.createBusiness(req.body);
    res.status(201).json(business);
  } catch (error) {
    res.status(500).json({ error: 'Error creating business' });
  }
}

async function getBusiness(req, res) {
  try {
    const business = await businessService.getBusinessById(req.params.id);
    if (business) {
      res.json(business);
    } else {
      res.status(404).json({ error: 'Business not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching business' });
  }
}

async function updateBusiness(req, res) {
  try {
    const business = await businessService.updateBusiness(req.params.id, req.body);
    res.json(business);
  } catch (error) {
    res.status(500).json({ error: 'Error updating business' });
  }
}

async function deleteBusiness(req, res) {
  try {
    const business = await businessService.deleteBusiness(req.params.id);
    res.json(business);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting business' });
  }
}

module.exports = {
  createBusiness,
  getBusiness,
  updateBusiness,
  deleteBusiness
};