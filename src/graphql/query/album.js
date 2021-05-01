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

  // 비즈니스 로직상 앨범이 나오면 무조건 노래는 존재함
  if(Object.keys(queryFilter).length == 0) queryFilter.include = [{ model: models.Music }];
  else queryFilter.include.push({ model: models.Music })

  return await repository.Album.findAll(queryFilter);
}

export default {
  albums
};