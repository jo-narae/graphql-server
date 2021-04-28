export default `
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
    artists(id: Int): [Artists]
  }
`;