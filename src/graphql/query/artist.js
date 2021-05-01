const models = require('../../db/models');
const repository = require('../../db/repository');

const graphqlFields = require('graphql-fields');

const artists = async (obj , args , context , info) => {

  let queryFilter = {};

  const artistObject = graphqlFields(info);
  const artistsInclude = [];
  if (Object.keys(artistObject).some(members => members == 'agency')) {
    artistsInclude.push({ model: models.Agency });
  }
  if (Object.keys(artistObject).some(members => members == 'members')) {
    artistsInclude.push({ model: models.Member });
  }
  if (Object.keys(artistObject).some(albums => albums == 'albums')) {
    // 비즈니스 로직상 앨범이 나오면 무조건 노래는 존재함
    artistsInclude.push({ model: models.Album, include: [{ model: models.Music }] });
  }

  queryFilter.include = artistsInclude;

  if(args.id) {
    queryFilter.where = { id: args.id };
  }

  return await repository.Artist.findAll(queryFilter);
}

export default {
  artists
};