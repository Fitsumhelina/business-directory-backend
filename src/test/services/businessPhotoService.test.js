const { expect } = require('chai');
const sinon = require('sinon');
const BusinessPhotoService = require('../../services/businessPhotoService');
const BusinessPhoto = require('../../models/BusinessPhoto');

describe('Business Photo Service', function() {
  afterEach(function() {
    sinon.restore();
  });

  it('should get all photos for a business', async function() {
    const mockPhotos = [{ photo_id: 1, business_id: 1, url: 'http://example.com/photo.jpg' }];
    sinon.stub(BusinessPhoto, 'findAll').resolves(mockPhotos);

    const photos = await BusinessPhotoService.getAllPhotosForBusiness(1);
    expect(photos).to.be.an('array');
    expect(photos[0]).to.have.property('photo_id');
  });

  it('should add a photo for a business', async function() {
    const newPhoto = { business_id: 1, url: 'http://example.com/photo.jpg' };
    sinon.stub(BusinessPhoto, 'create').resolves(newPhoto);

    const photo = await BusinessPhotoService.addPhoto(newPhoto);
    expect(photo).to.have.property('url', 'http://example.com/photo.jpg');
  });

  it('should delete a photo by ID', async function() {
    sinon.stub(BusinessPhoto, 'destroy').resolves(1); // Number of affected rows

    const result = await BusinessPhotoService.deletePhoto(1);
    expect(result).to.equal(1);
  });
});
