import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query getUser($id: ID!) {
  getUser(_id: $id) {
    _id
    username
    email
    locations {
      _id
      name
      description
      lat
      long
      username
    }
  }
}
`;

export const GET_USERS = gql`
query getUsers{
  getUsers {
    _id
    username
    email
  }
}
`;
