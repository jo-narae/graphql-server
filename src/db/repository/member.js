const models = require('../models');

async function findAll(args) {
  return await models.Member.findAll(args);
}

async function create(args) {
  return await models.Member.create(args);
}

async function update(args) {
  return await models.Member.update(args, { where: { id: args.id } });
}

async function destroy(args) {
  return await models.Member.destroy({ where: { id: args.id } });
}

module.exports = {
  findAll,
  create,
  update,
  destroy
};