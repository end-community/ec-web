import { makeVar, TypePolicy } from "@apollo/client";

export const isLoggedInVar = makeVar<boolean>(false);

export default {
  read() {
    return isLoggedInVar();
  },
} as TypePolicy["fields"];
