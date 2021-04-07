const models = require('../models');

async function findAll(args) {
  return await models.Album.findAll(args);
}

async function create(args) {
  return await models.Album.create(args);
}

async function update(args) {
  return await models.Album.update(args, { where: { id: args.id } });
}

async function destroy(args) {
  return await models.Album.destroy({ where: { id: args.id } });
}

module.exports = {
  findAll,
  create,
  update,
  destroy
};