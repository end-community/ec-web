import { gql } from "@apollo/client";
import { USER_FRAMGENT } from "../fragment";

const CREATE_USER_GQL = gql`
  ${USER_FRAMGENT}
  mutation createUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      data {
        ...UserParts
      }
      token
    }
  }
`;

export default CREATE_USER_GQL;
