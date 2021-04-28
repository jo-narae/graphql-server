import { gql } from 'apollo-server-koa';

import agency from './type/agency';
import artist from './type/artist';
import member from './type/member';
import album from './type/album';
import music from './type/music';
import query from './type/query';
import mutation from './type/mutation';

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
