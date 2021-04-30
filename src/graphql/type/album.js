export default `
  type Albums {
    id: Int!
    name: String!
    release_date: String!
    artist: Artist
    img: String!
  }

  type Album {
    id: Int!
    name: String!
    release_date: String!
    artist: Artist
    img: String!
  }
`;