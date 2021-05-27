import { gql } from "@apollo/client";
import { USER_FRAMGENT } from "../fragment";

const ME_GQL = gql`
  ${USER_FRAMGENT}
  query meQuery {
    me {
      ...UserParts
    }
  }
`;

export default ME_GQL;
