import { gql } from "@apollo/client";

export const USER_FRAMGENT = gql`
  fragment UserParts on User {
    id
    nickname
    phoneNumber
    email
    thumbnail
    birthDate
    gender
  }
`;
export default USER_FRAMGENT;
