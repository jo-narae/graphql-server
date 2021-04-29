import { gql } from 'apollo-server-koa';

import agency from './agency';
import artist from './artist';
import member from './member';
import album from './album';
import music from './music';
import query from './query';
import mutation from './mutation';

export default gql`
  type Results {
    result: Boolean!
    message: String
  }

  ${agency}
  ${artist}
  ${member}
  ${album}
  ${music}

  ${query}

  ${mutation}

`;
