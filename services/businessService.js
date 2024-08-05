// services/businessService.js
const Business = require('../models/Business');

async function createBusiness(data) {
  try {
    const business = await Business.forge(data).save();
    return business;
  } catch (error) {
    console.error('Error creating business:', error);
    throw error;
  }
}

async function getBusinessById(id) {
  try {
    const business = await Business.where({ business_id: id }).fetch();
    return business;
  } catch (error) {
    console.error('Error fetching business:', error);
    throw error;
  }
}

async function updateBusiness(id, data) {
  try {
    const business = await Business.where({ business_id: id }).fetch({ require: true });
    await business.save(data, { patch: true });
    return business;
  } catch (error) {
    console.error('Error updating business:', error);
    throw error;
  }
}

async function deleteBusiness(id) {
  try {
    const business = await Business.where({ business_id: id }).fetch({ require: true });
    await business.destroy();
    return business;
  } catch (error) {
    console.error('Error deleting business:', error);
    throw error;
  }
}

module.exports = {
  createBusiness,
  getBusinessById,
  updateBusiness,
  deleteBusiness
};
