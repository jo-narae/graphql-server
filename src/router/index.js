const Router = require('koa-router');
const models = require('../db/models');
const repository = require('../db/repository');

const agency = require('./agency');
const artist = require('./artist');
const member = require('./member');
const album = require('./album');
const music = require('./music');

module.exports = () => {
  const router = new Router();

  router.use('/agencies', agency.routes());
  router.use('/artists', artist.routes());
  router.use('/members', member.routes());
  router.use('/albums', album.routes());
  router.use('/music', music.routes());

  return router;
};