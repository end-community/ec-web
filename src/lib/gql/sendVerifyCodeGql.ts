import { gql } from "@apollo/client";

const SEND_VERIFY_CODE_USER_GQL = gql`
  mutation sendVerifyCodeUserMutation($input: SendVerifyCodeUserInput!) {
    sendVerifyCodeUser(input: $input)
  }
`;

export default SEND_VERIFY_CODE_USER_GQL;
