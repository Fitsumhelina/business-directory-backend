const { expect } = require('chai');
const sinon = require('sinon');
const UserService = require('../../services/userService');
const User = require('../../models/User');

describe('User Service', function() {
  afterEach(function() {
    sinon.restore();
  });

  it('should get all users', async function() {
    const mockUsers = [{ user_id: 1, name: 'John Doe' }];
    sinon.stub(User, 'findAll').resolves(mockUsers);

    const users = await UserService.getAllUsers();
    expect(users).to.be.an('array');
    expect(users[0]).to.have.property('user_id');
  });

  it('should get a user by ID', async function() {
    const mockUser = { user_id: 1, name: 'John Doe' };
    sinon.stub(User, 'findByPk').resolves(mockUser);

    const user = await UserService.getUserById(1);
    expect(user).to.have.property('user_id', 1);
  });

  it('should create a new user', async function() {
    const newUser = { name: 'Jane Doe', email: 'jane@example.com', password: 'password123' };
    sinon.stub(User, 'create').resolves(newUser);

    const user = await UserService.createUser(newUser);
    expect(user).to.have.property('name', 'Jane Doe');
  });

  it('should update a user by ID', async function() {
    const updatedUser = { user_id: 1, name: 'John Updated' };
    sinon.stub(User, 'update').resolves([1]); // [number of affected rows]
    sinon.stub(User, 'findByPk').resolves(updatedUser);

    const user = await UserService.updateUser(1, { name: 'John Updated' });
    expect(user).to.have.property('name', 'John Updated');
  });

  it('should delete a user by ID', async function() {
    sinon.stub(User, 'destroy').resolves(1); // Number of affected rows

    const result = await UserService.deleteUser(1);
    expect(result).to.equal(1);
  });
});
