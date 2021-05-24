import { InMemoryCache, TypePolicy } from "@apollo/client";
import { user, geo } from "./var";

const Query: TypePolicy = {
  fields: {
    user,
    geo,
  },
};

export default new InMemoryCache({
  typePolicies: {
    Query,
  },
});
