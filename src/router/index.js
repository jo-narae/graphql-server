const Router = require('koa-router');
const db = require('../db');

module.exports = () => {
  const router = new Router();

  router.get('/agencies', async (ctx) => {

    let results = null;

    await db.Agency.findAll({ include: db.Artist }).then(res => results = res).catch(err => results = err);

    ctx.body = results;
  });

  router.get('/artists', async (ctx) => {

    let results = null;

    await db.Artist.findAll({ include: db.Agency }).then(res => results = res).catch(err => results = err);

    ctx.body = results;
  });

  return router;
};
