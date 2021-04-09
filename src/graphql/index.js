import typeDefs from './typeDefs';
import { makeExecutableSchema } from 'apollo-server-koa';

import agencyQuery from './query/agency';
import artistQuery from './query/artist';

import agencyMutation from './mutation/agency';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: Object.assign(agencyQuery, artistQuery),
    Mutation: Object.assign(agencyMutation)
  },
});

export default schema;