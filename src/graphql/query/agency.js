const models = require('../../db/models');
const repository = require('../../db/repository');

const graphqlFields = require('graphql-fields');

const agencies = async (obj , args , context , info) => {

  let queryFilter = {};

  if (Object.keys(graphqlFields(info)).some(artists => artists == 'artists')) {
    queryFilter.include = [{ model: models.Artist }];

    const artistObject = graphqlFields(info).artists;
    const artistsInclude = [];
    if (Object.keys(artistObject).some(members => members == 'members')) {
      artistsInclude.push({ model: models.Member });
    }
    if (Object.keys(artistObject).some(albums => albums == 'albums')) {
      // 비즈니스 로직상 앨범이 나오면 무조건 노래는 존재함
      artistsInclude.push({ model: models.Album, include: [{ model: models.Music }] });
    }

    queryFilter.include[0].include = artistsInclude;
  }

  if(args.id) {
    queryFilter.where = { id: args.id };
  }

  return await repository.Agency.findAll(queryFilter);
}

export default {
  agencies
};