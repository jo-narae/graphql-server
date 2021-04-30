export default `
  type Artists {
    id: Int!
    name: String!
    debut_date: String!
    members: [Members]
    albums: [Albums]
    agency: Agency
    img: String!
    description: String!
  }

  type Artist {
    id: Int!
    name: String!
    debut_date: String!
    agency: Agency
    img: String!
    description: String!
  }
`;