import { useState } from "react";
import { useRouter } from "next/router";
import {
  checkVerifyCodeUserMutation,
  checkVerifyCodeUserMutationVariables,
} from "@/__generated__/checkVerifyCodeUserMutation";
import {
  createUserMutation,
  createUserMutationVariables,
} from "@/__generated__/createUserMutation";
import {
  sendVerifyCodeUserMutation,
  sendVerifyCodeUserMutationVariables,
} from "@/__generated__/sendVerifyCodeUserMutation";
import { useMutation, useReactiveVar } from "@apollo/client";
import { geoVar, isLoggedInVar } from "~/apollo/var";
import {
  CREATE_USER_GQL,
  CHECK_VERIFY_CODE_USER_GQL,
  SEND_VERIFY_CODE_USER_GQL,
  useCtx,
  getErrRes,
} from "~/lib";
import { toast } from "react-toastify";
// only ctx, state, gql request
const useRegister = () => {
  // state
  const [as] = useCtx();
  const { push } = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [_phoneNumber, setPhoneNumber] = useState("");
  const [parsedPhoneNumber, setParsedPhoneNumber] = useState("");
  const geo = useReactiveVar(geoVar);
  // gql
  const sendVerifyCodeUserMutation = useMutation<
    sendVerifyCodeUserMutation,
    sendVerifyCodeUserMutationVariables
  >(SEND_VERIFY_CODE_USER_GQL, {
    onError: (error) => {
      const { errCode } = getErrRes(error);
      if (errCode === "2") {
        toast("이미 가입된 번호입니다.", { type: toast.TYPE.ERROR });
      }
    },
    onCompleted: () => {
      toast("인증코드가 전송되었습니다.");
    },
  });
  const checkVerifyCodeUserMutation = useMutation<
    checkVerifyCodeUserMutation,
    checkVerifyCodeUserMutationVariables
  >(CHECK_VERIFY_CODE_USER_GQL, {
    onError: (error) => {
      const { errCode } = getErrRes(error);
      if (errCode === "1") {
        toast("인증코드가 틀립니다.", { type: toast.TYPE.ERROR });
      }
    },
    onCompleted: () => {
      setStep(3);
    },
  });
  const createUserMutation = useMutation<
    createUserMutation,
    createUserMutationVariables
  >(CREATE_USER_GQL, {
    onCompleted: ({ createUser: { token } }) => {
      localStorage.setItem("ect", token);
      isLoggedInVar(true);
      toast("환영합니다!");
      push("/");
    },
  });
  //
  return {
    as,
    step,
    setStep,
    _phoneNumber,
    setPhoneNumber,
    parsedPhoneNumber,
    setParsedPhoneNumber,
    country: geo && geo.country,
    createUserMutation,
    sendVerifyCodeUserMutation,
    checkVerifyCodeUserMutation,
  };
};

export default useRegister;
