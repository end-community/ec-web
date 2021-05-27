import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";
import { Flip } from "react-toastify";
import { initializeApollo } from "~/apollo";
import { Init } from "~/components";
import { CtxProvider, CtxValue } from "~/lib";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [appState, setAppState] = useState<CtxValue>({
    gapiAuth: null,
    fbAuth: null,
    oauthProfile: null,
  });
  useEffect(() => {
    FB.init({
      appId: "1113553732472413",
      cookie: true, // Enable cookies to allow the server to access the session.
      xfbml: true, // Parse social plugins on this webpage.
      version: "v10.0", // Use this Graph API version for this call.
    });
    setAppState((s) => ({
      ...s,
      fbAuth: {
        login: FB.login,
        api: FB.api,
      },
    }));
    window.gapi.load("client:auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "232497509697-lk2pbtdbrnep23104me31m94gtqf8bi6.apps.googleusercontent.com",
        })
        .then(() => {
          const { signIn, isSignedIn, currentUser } =
            window.gapi.auth2.getAuthInstance();
          setAppState((s) => ({
            ...s,
            gapiAuth: { signIn, isSignedIn, currentUser },
          }));
        });
    });
  }, []);
  const apolloClient = initializeApollo();

  if (process.env.NODE_ENV === "development") {
    useEffect(() => {
      console.log(appState);
    }, [appState]);
  }

  // fetch("https://ipinfo.io").then((res) => console.log(res.json()));
  return (
    <ApolloProvider client={apolloClient}>
      <CtxProvider value={[appState, setAppState]}>
        <Init>
          <ToastContainer transition={Flip} />
          <Component {...pageProps} />
        </Init>
      </CtxProvider>
    </ApolloProvider>
  );
}

export default appWithTranslation(MyApp);
