const models = require('../models');

async function findAll(args) {
  return await models.Artist.findAll(args);
}

module.exports = {
  findAll
};

