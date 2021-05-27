import { InMemoryCache, TypePolicy } from "@apollo/client";
import { user, geo, isLoggedIn } from "./var";

const Query: TypePolicy = {
  fields: {
    user,
    geo,
    isLoggedIn,
  },
};

export default new InMemoryCache({
  typePolicies: {
    Query,
  },
});
