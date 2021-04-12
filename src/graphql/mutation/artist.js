const repository = require('../../db/repository');

const createArtist = async (obj , args , context , info) => {
  const results = { result: false, message: "It's successful!" }
  await repository.Artist.create(args).then(() => results.result = true).catch(err => results.message = err.message);
  return results;
};

const updateArtist = async (obj , args , context , info) => {
  const results = { result: false, message: "It's successful!" }
  await repository.Artist.update(args).then(res => {
    if (res[0]) { results.result = true; }
    else { results.message = "Nothing has been modified."; }
  }).catch(err => results.message = err.message);
  return results;
};

const destroyArtist = async (obj , args , context , info) => {
  const results = { result: false, message: "It's successful!" }
  await repository.Artist.destroy(args).then(res => {
    if (res) { results.result = true; }
    else { results.message = "There is nothing to delete."; }
  }).catch(err => results.message = err.message);
  return results;
};

export default {
  createArtist,
  updateArtist,
  destroyArtist
};