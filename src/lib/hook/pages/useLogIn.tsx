import { useLazyQuery, useReactiveVar } from "@apollo/client";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { SubmitHandler } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { geoVar, isLoggedInVar, LOG_IN_LOCAL } from "~/apollo";
import {
  useGoogleLogIn,
  useFacebookLogIn,
  getErrRes,
  parsePhoneNumber,
  LogInFormData,
} from "~/lib";
import { UserProvider } from "@/__generated__/globalTypes";
import {
  logInUserLocal,
  logInUserLocalVariables,
} from "@/__generated__/logInUserLocal";
import {
  logInUserOauth,
  logInUserOauthVariables,
} from "@/__generated__/logInUserOauth";
import { LOG_IN_OAUTH } from "~/apollo/gql";

export interface OnLogInOauthClick {
  oauthId: string;
  provider: UserProvider;
}

const useLogIn = () => {
  // ? gql
  const onCompleted = ({ logInUserLocal, logInUserOauth }) => {
    localStorage.setItem("ect", logInUserLocal || logInUserOauth);
    isLoggedInVar(true);
    push("/");
  };
  const onLogInLocalError = (error) => {
    const { errCode } = getErrRes(error);
    if (errCode === "1") {
      toast("잘못된 비밀번호입니다.", { type: toast.TYPE.ERROR });
    }
  };
  const [logInLocalQuery] = useLazyQuery<
    logInUserLocal,
    logInUserLocalVariables
  >(LOG_IN_LOCAL, { onCompleted, onError: onLogInLocalError });
  const onLogInOauthError = (error) => {
    const { errCode } = getErrRes(error);
    if (errCode === "3") {
      toast("회원가입 먼저 해주세요", { type: toast.TYPE.INFO });
    }
  };
  const [logInOauthQuery] = useLazyQuery<
    logInUserOauth,
    logInUserOauthVariables
  >(LOG_IN_OAUTH, { onCompleted, onError: onLogInOauthError });
  // ? state
  const onLogInOauthClick = ({ oauthId, provider }: OnLogInOauthClick) => {
    logInOauthQuery({ variables: { input: { oauthId, provider } } });
  };
  const { push } = useRouter();
  const geo = useReactiveVar(geoVar);
  const { onGoogleClick, googleBtnDisabled } = useGoogleLogIn({
    login: onLogInOauthClick,
  });
  const { onFacebookClick, fbBtnDisabled } = useFacebookLogIn({
    login: onLogInOauthClick,
  });
  // ? fn
  const onFormSubmit: SubmitHandler<LogInFormData> = ({ id, password }) => {
    logInLocalQuery({
      variables: {
        input: {
          phoneNumber: parsePhoneNumber(id, geo.country) || id,
          password,
        },
      },
    });
  };
  // variables
  const buttonList = [
    {
      children: (
        <>
          <AiOutlineGoogle className="absolute left-0 text-2xl" />
          구글로 로그인
        </>
      ),
      color: "red",
      onClick: onGoogleClick,
      disabled: googleBtnDisabled,
    },
    {
      children: (
        <>
          <FaFacebookSquare className="absolute left-0 text-2xl" />
          페이스북으로 로그인
        </>
      ),
      color: "blue",
      onClick: onFacebookClick,
      disabled: fbBtnDisabled,
    },
    {
      children: "회원가입",
      color: "green",
      onClick: () => push("/register"),
      disabled: false,
    },
  ] as const;
  return {
    buttonList,
    onFormSubmit,
  };
};

export default useLogIn;
