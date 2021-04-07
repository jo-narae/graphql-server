const models = require('../models');

async function findAll(args) {
  return await models.Agency.findAll(args);
}

module.exports = {
  findAll
};