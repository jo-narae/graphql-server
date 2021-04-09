const repository = require('../../db/repository');

const createAgency = async (obj , args , context , info) => {
  const results = { result: false, message: "It's successful!" }
  await repository.Agency.create(args).then(() => results.result = true).catch(err => results.message = err.message);
  return results;
};

const updateAgency = async (obj , args , context , info) => {
  const results = { result: false, message: "It's successful!" }
  await repository.Agency.update(args).then(res => {
    if (res[0]) { results.result = true; }
    else { results.message = "Nothing has been modified."; }
  }).catch(err => results.message = err.message);
  return results;
};

const destroyAgency = async (obj , args , context , info) => {
  const results = { result: false, message: "It's successful!" }
  await repository.Agency.destroy(args).then(res => {
    if (res) { results.result = true; }
    else { results.message = "There is nothing to delete."; }
  }).catch(err => results.message = err.message);
  return results;
};

export default {
  createAgency,
  updateAgency,
  destroyAgency
};