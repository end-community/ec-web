import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      token
    }
  }
`;

export default CREATE_USER;
