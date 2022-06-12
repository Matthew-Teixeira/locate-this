import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      token
      user {
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_LOCATION = gql`
  mutation addLocation(
    $username: String!
    $name: String!
    $description: String!
    $long: Float!
    $lat: Float!
  ) {
    addLocation(
      username: $username
      name: $name
      description: $description
      long: $long
      lat: $lat
    ) {
      name
      description
      long
      lat
      username
    }
  }
`;
