const Router = require('koa-router');
const router = new Router();

const models = require('../db/models');
const repository = require('../db/repository');

const Joi = require('joi');

router.get('/', async (ctx) => {
  ctx.body = await repository.Agency.findAll({ include: models.Artist });
});

router.get('/:id', async (ctx) => {
  ctx.body = await repository.Agency.findAll({ where: { id: ctx.params.id }, include: models.Artist });
});

router.post('/', async (ctx) => {

  const req = ctx.request.body;

  const schema = Joi.object({
    name: Joi.string().min(1).max(50).required(),
    ceo: Joi.string().min(1).max(50).required(),
    address: Joi.string().min(1).max(100).required()
  });

  try {
    await schema.validateAsync(req);
    ctx.body = await repository.Agency.create(req);
  }
  catch (err) {
    ctx.status = 400; // bad request
    ctx.body = err;
  }
});

router.put('/:id', async (ctx) => {

  const req = ctx.request.body;

  const schema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(1).max(50),
    ceo: Joi.string().min(1).max(50),
    address: Joi.string().min(1).max(100)
  });

  req.id = ctx.params.id;

  try {
    await schema.validateAsync(req);
    ctx.body = await repository.Agency.update(req);
  }
  catch (err) {
    ctx.status = 400; // bad request
    ctx.body = err;
  }
});

router.delete('/:id', async (ctx) => {

  const req = { id: ctx.params.id };

  const schema = Joi.object({
    id: Joi.number().required()
  });

  try {
    await schema.validateAsync(req);
    ctx.body = await repository.Agency.destroy(req);
  }
  catch (err) {
    ctx.status = 400; // bad request
    ctx.body = err;
  }
});

module.exports = router;