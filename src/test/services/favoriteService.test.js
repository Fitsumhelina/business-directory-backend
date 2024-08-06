const { expect } = require('chai');
const sinon = require('sinon');
const FavoriteService = require('../../services/favoriteService');
const Favorite = require('../../models/Favorite');

describe('Favorite Service', function() {
  afterEach(function() {
    sinon.restore();
  });

  it('should get all favorites for a user', async function() {
    const mockFavorites = [{ favorite_id: 1, user_id: 1, business_id: 1 }];
    sinon.stub(Favorite, 'findAll').resolves(mockFavorites);

    const favorites = await FavoriteService.getAllFavoritesForUser(1);
    expect(favorites).to.be.an('array');
    expect(favorites[0]).to.have.property('favorite_id');
  });

  it('should add a favorite', async function() {
    const newFavorite = { user_id: 1, business_id: 1 };
    sinon.stub(Favorite, 'create').resolves(newFavorite);

    const favorite = await FavoriteService.addFavorite(newFavorite);
    expect(favorite).to.have.property('user_id', 1);
  });

  it('should remove a favorite', async function() {
    sinon.stub(Favorite, 'destroy').resolves(1); // Number of affected rows

    const result = await FavoriteService.removeFavorite(1);
    expect(result).to.equal(1);
  });
});
