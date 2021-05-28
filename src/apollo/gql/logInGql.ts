import { gql } from "@apollo/client";

export const LOG_IN_LOCAL = gql`
  query logInUserLocal($input: LogInUserLocalInput!) {
    logInUserLocal(input: $input)
  }
`;

export const LOG_IN_OAUTH = gql`
  query logInUserOauth($input: LogInUserOauthInput!) {
    logInUserOauth(input: $input)
  }
`;
