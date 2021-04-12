const repository = require('../../db/repository');

const createMember = async (obj , args , context , info) => {
  const results = { result: false, message: "It's successful!" }
  await repository.Member.create(args).then(() => results.result = true).catch(err => results.message = err.message);
  return results;
};

const updateMember = async (obj , args , context , info) => {
  const results = { result: false, message: "It's successful!" }
  await repository.Member.update(args).then(res => {
    if (res[0]) { results.result = true; }
    else { results.message = "Nothing has been modified."; }
  }).catch(err => results.message = err.message);
  return results;
};

const destroyMember = async (obj , args , context , info) => {
  const results = { result: false, message: "It's successful!" }
  await repository.Member.destroy(args).then(res => {
    if (res) { results.result = true; }
    else { results.message = "There is nothing to delete."; }
  }).catch(err => results.message = err.message);
  return results;
};

export default {
  createMember,
  updateMember,
  destroyMember
};