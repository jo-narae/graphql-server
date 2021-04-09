const repository = require('../../db/repository');

const artists = async (obj , args , context , info) => {
  let queryFilter = {};

  if(args.id) {
    queryFilter.where = { id: args.id };
  }

  return await repository.Artist.findAll(queryFilter);
}

export default {
  artists
};