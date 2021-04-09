import { gql } from 'apollo-server-koa';

export default gql`
  type Agency {
    id: String!
    name: String!
    ceo: String!
    address: String!
  }

  type Agencies {
    id: Int
    name: String!
    ceo: String!
    address: String!
    artists: [Artists]
  }

  type Artists {
    id: Int!
    name: String!
    debut_date: String!
    agency_id: Int!
  }

  type Query {
    agencies(id: Int): [Agencies]!
    artists(id: Int): [Artists]!
  }
`;