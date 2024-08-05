// controllers/tagController.js
const tagService = require('../services/tagService');

async function createTag(req, res) {
  try {
    const tag = await tagService.createTag(req.body);
    res.status(201).json(tag);
  } catch (error) {
    res.status(500).json({ error: 'Error creating tag' });
  }
}

async function getTag(req, res) {
  try {
    const tag = await tagService.getTagById(req.params.id);
    if (tag) {
      res.json(tag);
    } else {
      res.status(404).json({ error: 'Tag not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tag' });
  }
}

async function updateTag(req, res) {
  try {
    const tag = await tagService.updateTag(req.params.id, req.body);
    res.json(tag);
  } catch (error) {
    res.status(500).json({ error: 'Error updating tag' });
  }
}

async function deleteTag(req, res) {
  try {
    const tag = await tagService.deleteTag(req.params.id);
    res.json(tag);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting tag' });
  }
}

module.exports = {
  createTag,
  getTag,
  updateTag,
  deleteTag
};
