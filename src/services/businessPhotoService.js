// services/businessPhotoService.js
const BusinessPhoto = require('../models/businessPhoto');

async function addBusinessPhoto(data) {
  try {
    const photo = await BusinessPhoto.forge(data).save();
    return photo;
  } catch (error) {
    console.error('Error adding business photo:', error);
    throw error;
  }
}

async function getBusinessPhotos(businessId) {
  try {
    const photos = await BusinessPhoto.where({ business_id: businessId }).fetchAll();
    return photos;
  } catch (error) {
    console.error('Error fetching business photos:', error);
    throw error;
  }
}

async function deleteBusinessPhoto(id) {
  try {
    const photo = await BusinessPhoto.where({ photo_id: id }).fetch({ require: true });
    await photo.destroy();
    return photo;
  } catch (error) {
    console.error('Error deleting business photo:', error);
    throw error;
  }
}

module.exports = {
  addBusinessPhoto,
  getBusinessPhotos,
  deleteBusinessPhoto
};
