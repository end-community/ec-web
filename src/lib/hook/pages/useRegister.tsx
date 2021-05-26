import {
  checkVerifyCodeUserMutation,
  checkVerifyCodeUserMutationVariables,
} from "@/__generated__/checkVerifyCodeUserMutation";
import {
  createUserMutation,
  createUserMutationVariables,
} from "@/__generated__/createUserMutation";
import { UserProvider } from "@/__generated__/globalTypes";
import {
  sendVerifyCodeUserMutation,
  sendVerifyCodeUserMutationVariables,
} from "@/__generated__/sendVerifyCodeUserMutation";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  CREATE_USER_GQL,
  CHECK_VERIFY_CODE_USER_GQL,
  SEND_VERIFY_CODE_USER_GQL,
} from "~/lib";

export interface OauthProfile {
  oauthId: string;
  email?: string;
  provider: UserProvider.GOOGLE | UserProvider.FACEBOOK;
}

const useRegister = () => {
  // state
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [oauthProfile, setOauthProfile] = useState<null | OauthProfile>(null);
  const [_phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    console.log(oauthProfile);
  }, [oauthProfile]);
  // gql
  const createUserMutation = useMutation<
    createUserMutation,
    createUserMutationVariables
  >(CREATE_USER_GQL, {
    onCompleted: (data: createUserMutation) => {},
  });
  const sendVerifyCodeUserMutation = useMutation<
    sendVerifyCodeUserMutation,
    sendVerifyCodeUserMutationVariables
  >(SEND_VERIFY_CODE_USER_GQL, {
    onCompleted: (data: sendVerifyCodeUserMutation) => {},
  });
  const checkVerifyCodeUserMutation = useMutation<
    checkVerifyCodeUserMutation,
    checkVerifyCodeUserMutationVariables
  >(CHECK_VERIFY_CODE_USER_GQL, {
    onCompleted: (data: checkVerifyCodeUserMutation) => {},
  });
  return {
    step,
    setStep,
    oauthProfile,
    setOauthProfile,
    _phoneNumber,
    setPhoneNumber,
    createUserMutation,
    sendVerifyCodeUserMutation,
    checkVerifyCodeUserMutation,
  };
};

export default useRegister;
