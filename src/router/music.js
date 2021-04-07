const Router = require('koa-router');
const router = new Router();

const models = require('../db/models');
const repository = require('../db/repository');

const Joi = require('joi');

router.get('/', async (ctx) => {
  ctx.body = await repository.Music.findAll({ include: models.Album });
});

router.get('/:id', async (ctx) => {
  ctx.body = await repository.Music.findAll({ where: { id: ctx.params.id }, include: models.Album });
});

router.post('/', async (ctx) => {

  const req = ctx.request.body;

  const schema = Joi.object({
    track: Joi.number().required(),
    name: Joi.string().min(1).max(50).required(),
    title : Joi.boolean().required(),
    play_time: Joi.string().min(1).max(8).required(),
    album_id: Joi.number().required()
  });

  try {
    await schema.validateAsync(req);
    ctx.body = await repository.Music.create(req);
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
    track: Joi.number().required(),
    name: Joi.string().min(1).max(50).required(),
    title : Joi.boolean().required(),
    play_time: Joi.string().min(1).max(8).required(),
    album_id: Joi.number().required()
  });

  req.id = ctx.params.id;

  try {
    await schema.validateAsync(req);
    ctx.body = await repository.Music.update(req);
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
    ctx.body = await repository.Music.destroy(req);
  }
  catch (err) {
    ctx.status = 400; // bad request
    ctx.body = err;
  }
});

module.exports = router;