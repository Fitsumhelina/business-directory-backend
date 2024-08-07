const { expect } = require('chai');
const sinon = require('sinon');
const RoleService = require('../../services/roleService');
const Role = require('../../models/role');

describe('Role Service', function() {
  afterEach(function() {
    sinon.restore();
  });

  it('should get all roles', async function() {
    const mockRoles = [{ role_id: 1, name: 'Admin' }];
    sinon.stub(Role, 'findAll').resolves(mockRoles);

    const roles = await RoleService.getAllRoles();
    expect(roles).to.be.an('array');
    expect(roles[0]).to.have.property('role_id');
  });

  it('should get a role by ID', async function() {
    const mockRole = { role_id: 1, name: 'Admin' };
    sinon.stub(Role, 'findByPk').resolves(mockRole);

    const role = await RoleService.getRoleById(1);
    expect(role).to.have.property('role_id', 1);
  });

  it('should create a new role', async function() {
    const newRole = { name: 'Editor' };
    sinon.stub(Role, 'create').resolves(newRole);

    const role = await RoleService.createRole(newRole);
    expect(role).to.have.property('name', 'Editor');
  });

  it('should update a role by ID', async function() {
    const updatedRole = { role_id: 1, name: 'Editor Updated' };
    sinon.stub(Role, 'update').resolves([1]); // [number of affected rows]
    sinon.stub(Role, 'findByPk').resolves(updatedRole);

    const role = await RoleService.updateRole(1, { name: 'Editor Updated' });
    expect(role).to.have.property('name', 'Editor Updated');
  });

  it('should delete a role by ID', async function() {
    sinon.stub(Role, 'destroy').resolves(1); // Number of affected rows

    const result = await RoleService.deleteRole(1);
    expect(result).to.equal(1);
  });
});
