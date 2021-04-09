import { gql } from 'apollo-server-koa';

export default gql`
  type Results {
    result: Boolean!
    message: String
  }

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

  type Mutation {
    createAgency(name: String!, ceo: String!, address: String!): Results
    updateAgency(id: Int!, name: String!, ceo: String!, address: String!): Results
    destroyAgency(id: Int!): Results
  }
`;