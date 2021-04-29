const models = require('../../db/models');
const repository = require('../../db/repository');

const graphqlFields = require('graphql-fields');

const musics = async (obj , args , context , info) => {
  let queryFilter = {};

  const albumObject = graphqlFields(info);
  if (Object.keys(albumObject).some(members => members == 'album')) {
    queryFilter.include = [{ model: models.Album, include: [] }];

    const albumObject = graphqlFields(info).album;

    if (Object.keys(albumObject).some(artist => artist == 'artist')) {
      queryFilter.include[0].include = [{ model: models.Artist, include: [] }];
      const artistObject = graphqlFields(info).album.artist;

      if (Object.keys(artistObject).some(agency => agency == 'agency')) {
        queryFilter.include[0].include[0].include = [{ model: models.Agency }];
      }
    }
  }

  if(args.id) {
    queryFilter.where = { id: args.id };
  }

  return await repository.Music.findAll(queryFilter);
}

export default {
  musics
};