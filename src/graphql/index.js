import { makeExecutableSchema } from 'apollo-server-koa';

import typeDefs from './type';

import agencyQuery from './query/agency';
import artistQuery from './query/artist';
import memberQuery from './query/member';
import albumQuery from './query/album';
import musicQuery from './query/music';

import agencyMutation from './mutation/agency';
import artistMutation from './mutation/artist';
import memberMutation from './mutation/member';
import albumMutation from './mutation/album';
import musicMutation from './mutation/music';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: Object.assign(
      agencyQuery,
      artistQuery,
      memberQuery,
      albumQuery,
      musicQuery
    ),
    Mutation: Object.assign(
      agencyMutation,
      artistMutation,
      memberMutation,
      albumMutation,
      musicMutation
    )
  },
});

export default schema;