import { gql } from "@apollo/client";

const CHECK_VERIFY_CODE_USER_GQL = gql`
  mutation checkVerifyCodeUserMutation($input: CheckVerifyCodeUserInput!) {
    checkVerifyCodeUser(input: $input)
  }
`;

export default CHECK_VERIFY_CODE_USER_GQL;
