const Router = require('koa-router');
const repository = require('../db/repository');

module.exports = () => {
  const router = new Router();

  router.get('/agencies', async (ctx) => {
    ctx.body = await repository.Agency.AgencyFindAllIncludeArtist();
  });

  router.get('/artists', async (ctx) => {
    ctx.body = await repository.Artist.ArtistFindAllIncludeAgency();
  });

  return router;
};