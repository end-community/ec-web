import { UserProvider } from "@/__generated__/globalTypes";
import { useCallback, useEffect, useState } from "react";
import { useCtx } from "~/lib/context";

interface FacebookProfile {
  oauthId: string;
  provider: UserProvider.FACEBOOK;
  // name:string
}

const useFacebookLogIn = () => {
  const ctx = useCtx("registerPage", "useFacebookLogIn");
  const [profile, setProfile] = useState<FacebookProfile | null>(null);
  useEffect(() => {
    FB.init({
      appId: "1113553732472413",
      cookie: true, // Enable cookies to allow the server to access the session.
      xfbml: true, // Parse social plugins on this webpage.
      version: "v10.0", // Use this Graph API version for this call.
    });
    // FB.getLoginStatus(function (response) {
    //   console.log("statusChangeCallback");
    //   if (response.status === "connected") {
    //     console.log("페이스북에 로그인되어 있음");
    //     FB.api("/me", function (response: any) {
    //       console.log("Successful login for: " + response.name);
    //     });
    //   } else {
    //     console.log("페이스북에 로그인되어 있지 않음.");
    //   }
    // });
  }, []);
  const onFacebookClick = useCallback(() => {
    FB.login(
      (res) => {
        if (res.authResponse) {
          FB.api("/me", function (response) {
            const { id } = response as { id: string; name: string };
            if (ctx) {
              ctx.setOauthProfile({
                oauthId: id,
                provider: UserProvider.FACEBOOK,
              });
            } else {
              setProfile({ oauthId: id, provider: UserProvider.FACEBOOK });
            }
          });
        }
      },
      { scope: "public_profile,email" },
    );
  }, []);
  return { onFacebookClick, profile };
};

export default useFacebookLogIn;
