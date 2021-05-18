import { InMemoryCache, TypePolicy } from "@apollo/client";
import { user } from "./var";

const Query: TypePolicy = {
  fields: {
    user,
  },
};

export default new InMemoryCache({
  typePolicies: {
    Query,
  },
});
