import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { appWithTranslation } from "next-i18next";
import { initializeApollo } from "~/apollo";
import store from "~/redux/store";
import withAuth from "~/lib/hoc/withAuth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = initializeApollo();
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default appWithTranslation(withAuth(MyApp));
