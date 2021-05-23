import { gql } from "@apollo/client";

const HELLO_GQL = gql`
  query hello {
    hello
  }
`;

export default HELLO_GQL;
