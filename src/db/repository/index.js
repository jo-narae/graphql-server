const models = require('../models');

const agencyFindAll = async () => {
  let results = null;
  await models.Agency.findAll({ include: models.Artist }).then(res => results = res).catch(err => results = err);
  return results;
}

module.exports = {
  agencyFindAll
};