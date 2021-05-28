import React, { useState } from "react";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";
import { Flip } from "react-toastify";
import { initializeApollo } from "~/apollo";
import { AppCtxProvider, AppCtxValue } from "~/lib";
import { AppCont } from "~/containers/pages/app";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = initializeApollo();
  const appCtx = useState<AppCtxValue>({
    gapiAuth: null,
    fbAuth: null,
    oauthProfile: null,
  });

  // fetch("https://ipinfo.io").then((res) => console.log(res.json()));
  return (
    <ApolloProvider client={apolloClient}>
      <AppCtxProvider value={appCtx}>
        <AppCont>
          <ToastContainer transition={Flip} />
          <Component {...pageProps} />
        </AppCont>
      </AppCtxProvider>
    </ApolloProvider>
  );
}

export default appWithTranslation(MyApp);
