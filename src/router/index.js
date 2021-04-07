const Router = require('koa-router');
const models = require('../db/models');
const repository = require('../db/repository');

module.exports = () => {
  const router = new Router();

  router.get('/agencies', async (ctx) => {
    ctx.body = await repository.Agency.findAll({ include: models.Artist });
  });

  router.get('/artists', async (ctx) => {
    ctx.body = await repository.Artist.findAll({ include: models.Agency });
  });

  return router;
};