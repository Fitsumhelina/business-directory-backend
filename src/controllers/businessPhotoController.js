const BusinessPhotoService = require('../services/businessPhotoService');

module.exports = {
  addPhoto: async (req, res) => {
    try {
      const photo = await BusinessPhotoService.addPhoto(req.body);
      res.status(201).json(photo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPhoto: async (req, res) => {
    try {
      const photo = await BusinessPhotoService.getPhoto(req.params.id);
      if (!photo) {
        return res.status(404).json({ message: 'Photo not found' });
      }
      res.status(200).json(photo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  removePhoto: async (req, res) => {
    try {
      const result = await BusinessPhotoService.removePhoto(req.params.id);
      if (!result) {
        return res.status(404).json({ message: 'Photo not found' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
