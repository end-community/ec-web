import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import cache from "./cache";
import link from "./link";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const createApolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  uri: process.env.NEXT_PUBLIC_SERVER_URI + "/graphql",
  connectToDevTools: process.env.NODE_ENV === "development",
  cache,
  link,
});

export const initializeApollo = () => {
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") {
    return createApolloClient;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = createApolloClient;
  }

  return apolloClient;
};
