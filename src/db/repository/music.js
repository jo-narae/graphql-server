const models = require('../models');

async function findAll(args) {
  return await models.Music.findAll(args);
}

async function create(args) {
  return await models.Music.create(args);
}

async function update(args) {
  return await models.Music.update(args, { where: { id: args.id } });
}

async function destroy(args) {
  return await models.Music.destroy({ where: { id: args.id } });
}

module.exports = {
  findAll,
  create,
  update,
  destroy
};