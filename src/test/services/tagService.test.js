const { expect } = require('chai');
const sinon = require('sinon');
const TagService = require('../../services/tagService');
const Tag = require('../../models/Tag');

describe('Tag Service', function() {
  afterEach(function() {
    sinon.restore();
  });

  it('should get all tags', async function() {
    const mockTags = [{ tag_id: 1, name: 'Tag1' }];
    sinon.stub(Tag, 'findAll').resolves(mockTags);

    const tags = await TagService.getAllTags();
    expect(tags).to.be.an('array');
    expect(tags[0]).to.have.property('tag_id');
  });

  it('should get a tag by ID', async function() {
    const mockTag = { tag_id: 1, name: 'Tag1' };
    sinon.stub(Tag, 'findByPk').resolves(mockTag);

    const tag = await TagService.getTagById(1);
    expect(tag).to.have.property('tag_id', 1);
  });

  it('should create a new tag', async function() {
    const newTag = { name: 'Tag2' };
    sinon.stub(Tag, 'create').resolves(newTag);

    const tag = await TagService.createTag(newTag);
    expect(tag).to.have.property('name', 'Tag2');
  });

  it('should update a tag by ID', async function() {
    const updatedTag = { tag_id: 1, name: 'Tag Updated' };
    sinon.stub(Tag, 'update').resolves([1]); // [number of affected rows]
    sinon.stub(Tag, 'findByPk').resolves(updatedTag);

    const tag = await TagService.updateTag(1, { name: 'Tag Updated' });
    expect(tag).to.have.property('name', 'Tag Updated');
  });

  it('should delete a tag by ID', async function() {
    sinon.stub(Tag, 'destroy').resolves(1); // Number of affected rows

    const result = await TagService.deleteTag(1);
    expect(result).to.equal(1);
  });
});

