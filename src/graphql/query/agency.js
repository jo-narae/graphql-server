const models = require('../../db/models');
const repository = require('../../db/repository');

const agencies = async (obj , args , context , info) => {
  const isExistArtists = info.fieldNodes[0].selectionSet.selections.filter(item => item.name.value === 'artists');

  let queryFilter = {};

  if (isExistArtists.length) {
    queryFilter.include = [ { model: models.Artist } ];
  }

  if(args.id) {
    queryFilter.where = { id: args.id };
  }

  return await repository.Agency.findAll(queryFilter);
}

export default {
  agencies
};