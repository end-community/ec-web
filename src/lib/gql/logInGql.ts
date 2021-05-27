import { gql } from "@apollo/client";

const LOG_IN_GQL = gql`
  query logInUser($input: LogInUserInput!) {
    logInUser(input: $input)
  }
`;

export default LOG_IN_GQL;
