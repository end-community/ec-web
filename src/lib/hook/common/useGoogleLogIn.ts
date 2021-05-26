import { UserProvider } from "@/__generated__/globalTypes";
import { useCallback, useEffect, useState } from "react";
import { useCtx } from "~/lib/context";

interface GoogleProfile {
  oauthId: string;
  email: string;
  provider: UserProvider.GOOGLE;
}

const useGoogleLogIn = () => {
  const ctx = useCtx("registerPage", "useGoogleLogIn");
  const [auth, setAuth] = useState<any>();
  const [clicked, setClicked] = useState(false);
  const [profile, setProfile] = useState<GoogleProfile | null>(null);
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "232497509697-lk2pbtdbrnep23104me31m94gtqf8bi6.apps.googleusercontent.com",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          setAuth(auth);
        });
    });
  }, []);
  useEffect(() => {
    if (clicked && auth?.isSignedIn.fe) {
      const { NT: oauthId, pu: email } = auth.currentUser.fe.Ft;
      if (ctx) {
        console.log(ctx);
        ctx.setOauthProfile({ oauthId, email, provider: UserProvider.GOOGLE });
      } else {
        setProfile({ oauthId, email, provider: UserProvider.GOOGLE });
      }
    }
  }, [clicked]);
  const onGoogleClick = useCallback(() => {
    auth.signIn();
    setClicked(true);
  }, [auth]);
  return { onGoogleClick, profile };
};

export default useGoogleLogIn;
