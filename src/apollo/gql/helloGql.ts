import { gql } from "@apollo/client";

const HELLO = gql`
  query hello {
    hello
  }
`;

export default HELLO;
