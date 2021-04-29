const models = require('../../db/models');
const repository = require('../../db/repository');

const graphqlFields = require('graphql-fields');

const albums = async (obj , args , context , info) => {
  let queryFilter = {};

  const artistObject = graphqlFields(info);
  if (Object.keys(artistObject).some(members => members == 'artist')) {
    queryFilter.include = [{ model: models.Artist }];

    const artistObject = graphqlFields(info).artist;
    if (Object.keys(artistObject).some(agency => agency == 'agency')) {
      queryFilter.include[0].include = [{ model: models.Agency }];
    }
  }

  if(args.id) {
    queryFilter.where = { id: args.id };
  }

  return await repository.Album.findAll(queryFilter);
}

export default {
  albums
};