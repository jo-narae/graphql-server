const models = require('../../db/models');
const repository = require('../../db/repository');

const graphqlFields = require('graphql-fields');

const albums = async (obj , args , context , info) => {
  let queryFilter = { include: [] };

  const artistObject = graphqlFields(info);
  if (Object.keys(artistObject).some(members => members == 'artist')) {
    queryFilter.include.push({ model: models.Artist, include: [] });

    const artistObject = graphqlFields(info).artist;
    const artistsInclude = queryFilter.include[0].include;

    if (Object.keys(artistObject).some(agency => agency == 'agency')) {
      artistsInclude.push({ model: models.Agency });
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