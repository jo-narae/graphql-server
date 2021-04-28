const models = require('../../db/models');
const repository = require('../../db/repository');

const graphqlFields = require('graphql-fields');

const agencies = async (obj , args , context , info) => {

  let queryFilter = { include: [] };

  if (Object.keys(graphqlFields(info)).some(artists => artists == 'artists')) {
    queryFilter.include.push({ model: models.Artist, include: [] });

    const artistObject = graphqlFields(info).artists;
    const artistsInclude = queryFilter.include[0].include;
    if (Object.keys(artistObject).some(members => members == 'members')) {
      artistsInclude.push({ model: models.Member });
    }
    if (Object.keys(artistObject).some(albums => albums == 'albums')) {
      artistsInclude.push({ model: models.Album });
    }
  }

  if(args.id) {
    queryFilter.where = { id: args.id };
  }

  return await repository.Agency.findAll(queryFilter);
}

export default {
  agencies
};