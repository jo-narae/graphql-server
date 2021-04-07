const models = require('../models');

async function findAll(args) {
  return await models.Artist.findAll(args);
}

async function create(args) {
  return await models.Artist.create(args);
}

async function update(args) {
  return await models.Artist.update(args, { where: { id: args.id } });
}

async function destroy(args) {
  return await models.Artist.destroy({ where: { id: args.id } });
}

module.exports = {
  findAll,
  create,
  update,
  destroy
};

