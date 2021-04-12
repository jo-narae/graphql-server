const repository = require('../../db/repository');

const createMusic = async (obj , args , context , info) => {
  const results = { result: false, message: "It's successful!" }
  await repository.Music.create(args).then(() => results.result = true).catch(err => results.message = err.message);
  return results;
};

const updateMusic = async (obj , args , context , info) => {
  const results = { result: false, message: "It's successful!" }
  await repository.Music.update(args).then(res => {
    if (res[0]) { results.result = true; }
    else { results.message = "Nothing has been modified."; }
  }).catch(err => results.message = err.message);
  return results;
};

const destroyMusic = async (obj , args , context , info) => {
  const results = { result: false, message: "It's successful!" }
  await repository.Music.destroy(args).then(res => {
    if (res) { results.result = true; }
    else { results.message = "There is nothing to delete."; }
  }).catch(err => results.message = err.message);
  return results;
};

export default {
  createMusic,
  updateMusic,
  destroyMusic
};