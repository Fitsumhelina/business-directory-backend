const { expect } = require('chai');
const sinon = require('sinon');
const BusinessService = require('../../services/businessService');
const Business = require('../../models/Business');

describe('Business Service', function() {
  afterEach(function() {
    sinon.restore();
  });

  it('should get all businesses', async function() {
    const mockBusinesses = [{ business_id: 1, name: 'Business One' }];
    sinon.stub(Business, 'findAll').resolves(mockBusinesses);

    const businesses = await BusinessService.getAllBusinesses();
    expect(businesses).to.be.an('array');
    expect(businesses[0]).to.have.property('business_id');
  });

  it('should get a business by ID', async function() {
    const mockBusiness = { business_id: 1, name: 'Business One' };
    sinon.stub(Business, 'findByPk').resolves(mockBusiness);

    const business = await BusinessService.getBusinessById(1);
    expect(business).to.have.property('business_id', 1);
  });

  it('should create a new business', async function() {
    const newBusiness = { name: 'Business New', description: 'New Description' };
    sinon.stub(Business, 'create').resolves(newBusiness);

    const business = await BusinessService.createBusiness(newBusiness);
    expect(business).to.have.property('name', 'Business New');
  });

  it('should update a business by ID', async function() {
    const updatedBusiness = { business_id: 1, name: 'Business Updated' };
    sinon.stub(Business, 'update').resolves([1]); // [number of affected rows]
    sinon.stub(Business, 'findByPk').resolves(updatedBusiness);

    const business = await BusinessService.updateBusiness(1, { name: 'Business Updated' });
    expect(business).to.have.property('name', 'Business Updated');
  });

  it('should delete a business by ID', async function() {
    sinon.stub(Business, 'destroy').resolves(1); // Number of affected rows

    const result = await BusinessService.deleteBusiness(1);
    expect(result).to.equal(1);
  });
});
