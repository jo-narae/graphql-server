const models = require('../../db/models');
const repository = require('../../db/repository');

const graphqlFields = require('graphql-fields');

const musics = async (obj , args , context , info) => {
  let queryFilter = { include: [] };

  const albumObject = graphqlFields(info);
  if (Object.keys(albumObject).some(members => members == 'album')) {
    queryFilter.include.push({ model: models.Album, include: [] });

    const albumObject = graphqlFields(info).album;
    const artistsInclude = queryFilter.include[0].include;

    if (Object.keys(albumObject).some(artist => artist == 'artist')) {
      artistsInclude.push({ model: models.Artist, include: [] });
      const artistObject = graphqlFields(info).album.artist;
      const agencyInclude = artistsInclude[0].include;

      if (Object.keys(artistObject).some(agency => agency == 'agency')) {
        agencyInclude.push({ model: models.Agency });
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