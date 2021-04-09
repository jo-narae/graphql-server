import typeDefs from './typeDefs';
import { makeExecutableSchema } from 'apollo-server-koa';

import agencyQuery from './query/agency';
import artistQuery from './query/artist';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: Object.assign(agencyQuery, artistQuery)
  },
});

export default schema;