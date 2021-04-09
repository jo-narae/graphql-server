const Router = require('koa-router');

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
  router.use('/musics', music.routes());

  return router;
};