const { expect } = require('chai');
const sinon = require('sinon');
const AuthService = require('../../services/authService');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');

describe('Auth Service', function() {
  afterEach(function() {
    sinon.restore();
  });

  it('should register a new user', async function() {
    const newUser = { name: 'Jane Doe', email: 'jane@example.com', password: 'password123' };
    sinon.stub(User, 'create').resolves(newUser);

    const user = await AuthService.registerUser(newUser);
    expect(user).to.have.property('name', 'Jane Doe');
  });

  it('should login a user and return a token', async function() {
    const user = { email: 'john@example.com', password: 'password123' };
    sinon.stub(User, 'findOne').resolves(user);
    sinon.stub(jwt, 'sign').returns('jwt_token');

    const token = await AuthService.loginUser(user.email, user.password);
    expect(token).to.equal('jwt_token');
  });

  it('should get the current user from token', async function() {
    const token = 'jwt_token';
    const decoded = { user_id: 1 };
    sinon.stub(jwt, 'verify').returns(decoded);
    sinon.stub(User, 'findByPk').resolves({ user_id: 1, name: 'John Doe' });

    const user = await AuthService.getCurrentUser(token);
    expect(user).to.have.property('name', 'John Doe');
  });
});
