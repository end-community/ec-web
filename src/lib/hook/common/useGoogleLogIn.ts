import { UserProvider } from "@/__generated__/globalTypes";
import { useCallback, useEffect, useState } from "react";
import { useCtx } from "~/lib";

const useGoogleLogIn = (
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>,
) => {
  const [as, setAs] = useCtx();
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked && as?.gapiAuth?.isSignedIn.fe) {
      const { NT: oauthId, pu: email } = as.gapiAuth.currentUser.fe.Ft;
      setAs((s) => ({
        ...s,
        oauthProfile: { oauthId, email, provider: UserProvider.GOOGLE },
      }));
      if (setStep) setStep(2);
    }
  }, [clicked, as.gapiAuth]);
  const onGoogleClick = useCallback(() => {
    as.gapiAuth.signIn();
    setClicked(true);
  }, [as?.gapiAuth]);
  return { onGoogleClick, googleBtnDisabled: !as?.gapiAuth };
};

export default useGoogleLogIn;
