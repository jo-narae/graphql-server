const models = require('../models');

const ArtistFindAllIncludeAgency = async () => {
  let results = null;
  await models.Artist.findAll({ include: models.Agency }).then(res => results = res).catch(err => results = err);
  return results;
}

module.exports = {
  ArtistFindAllIncludeAgency
};

