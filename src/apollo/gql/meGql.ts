import { gql } from "@apollo/client";
import { USER_FRAMGENT } from "../fragment";

const ME = gql`
  ${USER_FRAMGENT}
  query meQuery {
    me {
      ...UserParts
    }
  }
`;

export default ME;
