export default `
  type Members {
    id: Int!
    name: String!
    age: Int!
    gender: String!
    position: String!
    artist: Artist
    agency: Agency
  }
`;