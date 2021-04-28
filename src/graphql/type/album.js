export default `
  type Albums {
    id: Int!
    name: String!
    release_date: String!
    artist: Artist
  }

  type Album {
    id: Int!
    name: String!
    release_date: String!
    artist: Artist
  }
`;