const { expect } = require('chai');
const sinon = require('sinon');
const RatingService = require('../../services/ratingService');
const Rating = require('../../models/Rating');

describe('Rating Service', function() {
  afterEach(function() {
    sinon.restore();
  });

  it('should get all ratings for a business', async function() {
    const mockRatings = [{ rating_id: 1, business_id: 1, user_id: 1, rating: 5 }];
    sinon.stub(Rating, 'findAll').resolves(mockRatings);

    const ratings = await RatingService.getAllRatingsForBusiness(1);
    expect(ratings).to.be.an('array');
    expect(ratings[0]).to.have.property('rating_id');
  });

  it('should add a rating', async function() {
    const newRating = { business_id: 1, user_id: 1, rating: 5 };
    sinon.stub(Rating, 'create').resolves(newRating);

    const rating = await RatingService.addRating(newRating);
    expect(rating).to.have.property('rating', 5);
  });

  it('should update a rating by ID', async function() {
    const updatedRating = { rating_id: 1, rating: 4 };
    sinon.stub(Rating, 'update').resolves([1]); // [number of affected rows]
    sinon.stub(Rating, 'findByPk').resolves(updatedRating);

    const rating = await RatingService.updateRating(1, { rating: 4 });
    expect(rating).to.have.property('rating', 4);
  });

  it('should delete a rating by ID', async function() {
    sinon.stub(Rating, 'destroy').resolves(1); // Number of affected rows

    const result = await RatingService.deleteRating(1);
    expect(result).to.equal(1);
  });
});
