import Koa from 'koa'
import logger from 'koa-logger'
import koaBody from 'koa-body'
import session from 'koa-session'

const router = require('./router');

import { ApolloServer } from 'apollo-server-koa';
import schema from './graphql';

const app = new Koa()

var sequelize = require('./db/models').sequelize;
sequelize.sync();

// Real ip get
app.proxy = true

// koa-session config
app.keys = ['secretSessionKey']
app.use(session({
  key: 'koa:sess',
  maxAge: 1200000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false,
}, app))

app.use(logger())
app.use(koaBody())

// router
const _router = router(router);
app.use(_router.routes());

// apollo
const apollo = new ApolloServer({ schema });
apollo.applyMiddleware({ app });

app.listen(process.env.port || 8080, () => console.log(`server started http://localhost:${process.env.port || 8080}`))

export default app

// 프로그램 실행 환경 변수 설정
process.env.NODE_ENV = process.env.NODE_ENV && (process.env.NODE_ENV).trim().toLowerCase() === 'development' ? 'development' : 'production'

// 프로세스 실행 시간 기준으로 cache 갱신
global.cache = (new Date()).valueOf().toString()
