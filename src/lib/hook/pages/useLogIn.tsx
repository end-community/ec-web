import { logInUser, logInUserVariables } from "@/__generated__/logInUser";
import { useLazyQuery, useReactiveVar } from "@apollo/client";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { geoVar, isLoggedInVar } from "~/apollo/var";
import { useGoogleLogIn, useFacebookLogIn } from "~/lib";
import { getErrRes } from "~/lib/common";
import { LOG_IN_GQL } from "~/lib/gql";

const useLogIn = () => {
  const { push } = useRouter();
  const [logInQuery] = useLazyQuery<logInUser, logInUserVariables>(LOG_IN_GQL, {
    onCompleted: ({ logInUser: token }) => {
      localStorage.setItem("ect", token);
      isLoggedInVar(true);
      push("/");
    },
    onError: (error) => {
      const { errCode } = getErrRes(error);
      if (errCode === "1") {
        toast("잘못된 비밀번호입니다.", { type: toast.TYPE.ERROR });
      }
    },
  });
  const geo = useReactiveVar(geoVar);
  const useGoogle = useGoogleLogIn();
  const useFB = useFacebookLogIn();
  return {
    push,
    ...useGoogle,
    ...useFB,
    country: geo && geo.country,
    logInQuery,
  };
};

export default useLogIn;
