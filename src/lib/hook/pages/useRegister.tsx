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
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { CREATE_USER_GQL, RegisterFormData } from "~/lib";
import {
  CHECK_VERIFY_CODE_USER_GQL,
  SEND_VERIFY_CODE_USER_GQL,
} from "~/lib/gql";

const useRegister = () => {
  const [
    createUserMutation,
    { loading: createUserMutationLoading, error: createUserMutationError },
  ] = useMutation<createUserMutation, createUserMutationVariables>(
    CREATE_USER_GQL,
    {
      onCompleted: (data: createUserMutation) => {},
    },
  );
  const [
    sendVerifyCodeUserMutation,
    {
      loading: sendVerifyCodeUserMutationLoading,
      error: sendVerifyCodeUserMutationError,
    },
  ] = useMutation<
    sendVerifyCodeUserMutation,
    sendVerifyCodeUserMutationVariables
  >(SEND_VERIFY_CODE_USER_GQL, {
    onCompleted: (data: sendVerifyCodeUserMutation) => {},
  });
  const [
    checkVerifyCodeUserMutation,
    {
      loading: checkVerifyCodeUserMutationLoading,
      error: checkVerifyCodeUserMutationError,
    },
  ] = useMutation<
    checkVerifyCodeUserMutation,
    checkVerifyCodeUserMutationVariables
  >(CHECK_VERIFY_CODE_USER_GQL, {
    onCompleted: (data: checkVerifyCodeUserMutation) => {},
  });
  const [_phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const onInputChange = (e) => setPhoneNumber(e.target.value);
  const onSendCodeClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    sendVerifyCodeUserMutation({
      variables: { input: { phoneNumber: _phoneNumber } },
    });
  };
  const onFormSubmit: SubmitHandler<RegisterFormData> = async ({
    verifyCode,
    phoneNumber,
    year,
    month,
    date,
    password,
    gender,
  }) => {
    switch (step) {
      case 1:
        console.log(verifyCode);
        try {
          await checkVerifyCodeUserMutation({
            variables: { input: { verifyCode } },
          });
          console.log("?");
        } catch (error) {
          console.error(error);
        }
        setStep(2);
        break;
      case 2:
        console.log(phoneNumber, year, month, date, password, gender);
        const birthDate = new Date().setFullYear(year, month, date);
        createUserMutation({
          variables: {
            input: { phoneNumber, password, birthDate, gender },
          },
        });
        break;
    }
  };
  return {
    step,
    createUserMutationLoading,
    sendVerifyCodeUserMutationLoading,
    sendVerifyCodeUserMutationError,
    checkVerifyCodeUserMutationLoading,
    onFormSubmit: onFormSubmit,
    onInputChange,
    onSendCodeClick,
    _phoneNumber,
  };
};

export default useRegister;
