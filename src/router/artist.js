const Router = require('koa-router');
const router = new Router();

const models = require('../db/models');
const repository = require('../db/repository');

router.get('/', async (ctx) => {
  ctx.body = await repository.Artist.findAll({ include: models.Agency });
});

module.exports = router;