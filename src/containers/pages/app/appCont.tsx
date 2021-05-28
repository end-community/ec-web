import { getGeoQuery } from "@/__generated__/getGeoQuery";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { geoVar, GET_GEO } from "~/apollo";
import { useAppCtx } from "~/lib";

const AppCont = ({ children }) => {
  const [as, setAs] = useAppCtx();
  const { data } = useQuery<getGeoQuery>(GET_GEO);
  useEffect(() => {
    FB.init({
      appId: "1113553732472413",
      cookie: true, // Enable cookies to allow the server to access the session.
      xfbml: true, // Parse social plugins on this webpage.
      version: "v10.0", // Use this Graph API version for this call.
    });
    setAs((s) => ({
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
          setAs((s) => ({
            ...s,
            gapiAuth: { signIn, isSignedIn, currentUser },
          }));
        });
    });
  }, []);
  useEffect(() => {
    if (data) geoVar(data.getGeo);
  }, [data]);
  if (process.env.NODE_ENV === "development") {
    useEffect(() => {
      console.log(as);
    }, [as]);
  }
  return children;
};
export default AppCont;
