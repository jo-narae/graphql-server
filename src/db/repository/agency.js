const models = require('../models');

const AgencyFindAll = async () => {
  let results = null;
  await models.Agency.findAll().then(res => results = res).catch(err => results = err);
  return results;
}

const AgencyFindAllIncludeArtist = async () => {
  let results = null;
  await models.Agency.findAll({ include: models.Artist }).then(res => results = res).catch(err => results = err);
  return results;
}

module.exports = {
  AgencyFindAll,
  AgencyFindAllIncludeArtist
};