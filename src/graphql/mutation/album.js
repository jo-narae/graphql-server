const repository = require('../../db/repository');

const createAlbum = async (obj , args , context , info) => {
  const results = { result: false, message: "It's successful!" }
  await repository.Album.create(args).then(() => results.result = true).catch(err => results.message = err.message);
  return results;
};

const updateAlbum = async (obj , args , context , info) => {
  const results = { result: false, message: "It's successful!" }
  await repository.Album.update(args).then(res => {
    if (res[0]) { results.result = true; }
    else { results.message = "Nothing has been modified."; }
  }).catch(err => results.message = err.message);
  return results;
};

const destroyAlbum = async (obj , args , context , info) => {
  const results = { result: false, message: "It's successful!" }
  await repository.Album.destroy(args).then(res => {
    if (res) { results.result = true; }
    else { results.message = "There is nothing to delete."; }
  }).catch(err => results.message = err.message);
  return results;
};

export default {
  createAlbum,
  updateAlbum,
  destroyAlbum
};