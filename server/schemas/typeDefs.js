const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    locations: [Location]
  }

  type Location {
    _id: ID!
    name: String!
    description: String!
    long: Float!
    lat: Float!
    username: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUsers: [User]
    getUser(_id: ID!): User
  }

  type Mutation {
    register(
      username: String!
      email: String!
      password: String!
      confirmPassword: String!
    ): Auth!
    login(email: String!, password: String!): Auth!
    addLocation(username: String!, name: String!, description: String!, long: Float!, lat: Float!): Location!
    deleteLocation(locationId: ID!): String!
  }
`;

module.exports = typeDefs;
