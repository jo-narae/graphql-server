const Router = require('koa-router');
const models = require('../db/models');
const repository = require('../db/repository');

const agency = require('./agency');
const artist = require('./artist');
const member = require('./member');

module.exports = () => {
  const router = new Router();

  router.use('/agencies', agency.routes());
  router.use('/artists', artist.routes());
  router.use('/members', member.routes());

  return router;
};