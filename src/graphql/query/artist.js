const models = require('../../db/models');
const repository = require('../../db/repository');

const graphqlFields = require('graphql-fields');

const artists = async (obj , args , context , info) => {

  let queryFilter = { include: [] };

  const artistObject = graphqlFields(info);
  const artistsInclude = queryFilter.include;
  if (Object.keys(artistObject).some(members => members == 'agency')) {
    artistsInclude.push({ model: models.Agency });
  }
  if (Object.keys(artistObject).some(members => members == 'members')) {
    artistsInclude.push({ model: models.Member });
  }
  if (Object.keys(artistObject).some(albums => albums == 'albums')) {
    artistsInclude.push({ model: models.Album });
  }

  if(args.id) {
    queryFilter.where = { id: args.id };
  }

  return await repository.Artist.findAll(queryFilter);
}

export default {
  artists
};