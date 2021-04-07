const models = require('../models');

async function findAll(args) {
  return await models.Agency.findAll(args);
}

async function create(args) {
  return await models.Agency.create(args);
}

async function update(args) {
  return await models.Agency.update(args, { where: { id: args.id } });
}

async function destroy(args) {
  return await models.Agency.destroy({ where: { id: args.id } });
}

module.exports = {
  findAll,
  create,
  update,
  destroy
};