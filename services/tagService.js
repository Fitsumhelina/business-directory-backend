// services/tagService.js
const Tag = require('../models/Tag');

async function createTag(data) {
  try {
    const tag = await Tag.forge(data).save();
    return tag;
  } catch (error) {
    console.error('Error creating tag:', error);
    throw error;
  }
}

async function getTagById(id) {
  try {
    const tag = await Tag.where({ tag_id: id }).fetch();
    return tag;
  } catch (error) {
    console.error('Error fetching tag:', error);
    throw error;
  }
}

async function updateTag(id, data) {
  try {
    const tag = await Tag.where({ tag_id: id }).fetch({ require: true });
    await tag.save(data, { patch: true });
    return tag;
  } catch (error) {
    console.error('Error updating tag:', error);
    throw error;
  }
}

async function deleteTag(id) {
  try {
    const tag = await Tag.where({ tag_id: id }).fetch({ require: true });
    await tag.destroy();
    return tag;
  } catch (error) {
    console.error('Error deleting tag:', error);
    throw error;
  }
}

module.exports = {
  createTag,
  getTagById,
  updateTag,
  deleteTag
};