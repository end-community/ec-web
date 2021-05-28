import {
  checkVerifyCodeUserMutation,
  checkVerifyCodeUserMutationVariables,
} from "@/__generated__/checkVerifyCodeUserMutation";
import {
  sendVerifyCodeUserMutation,
  sendVerifyCodeUserMutationVariables,
} from "@/__generated__/sendVerifyCodeUserMutation";
import { useMutation, useReactiveVar } from "@apollo/client";
import React, { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { Form, SendVeifyCode } from "~/components/common";
import {
  getErrRes,
  parsePhoneNumber,
  RegisterFormData,
  RegisterSchema,
} from "~/lib";
import {
  CHECK_VERIFY_CODE_USER,
  SEND_VERIFY_CODE_USER,
  geoVar,
} from "~/apollo";
import { SendVerifyCodeType } from "@/__generated__/globalTypes";

interface StepTwoContProps {
  setStep: React.Dispatch<React.SetStateAction<2 | 1 | 3>>;
}

const StepTwoCont: React.FC<StepTwoContProps> = ({ setStep }) => {
  // ? gql
  const onSendVerifyError = (error) => {
    const { errCode } = getErrRes(error);
    if (errCode === "2") {
      toast("이미 가입된 번호입니다.", { type: toast.TYPE.ERROR });
    }
  };
  const onSendVerifyCompleted = () => toast("인증코드가 전송되었습니다.");
  const [
    sendVerifyCodeUser,
    { loading: sendVerifyCodeUserLoading, called: sendVerifyCodeUserCalled },
  ] = useMutation<
    sendVerifyCodeUserMutation,
    sendVerifyCodeUserMutationVariables
  >(SEND_VERIFY_CODE_USER, {
    onError: onSendVerifyError,
    onCompleted: onSendVerifyCompleted,
  });
  const onCheckVerifyError = (error) => {
    const { errCode } = getErrRes(error);
    if (errCode === "1") {
      toast("인증코드가 틀립니다.", { type: toast.TYPE.ERROR });
    }
  };
  const onCheckVerifyCompleted = () => setStep(3);
  const [checkVerifyCodeUser, { loading: checkVerfiyCodeUserLoading }] =
    useMutation<
      checkVerifyCodeUserMutation,
      checkVerifyCodeUserMutationVariables
    >(CHECK_VERIFY_CODE_USER, {
      onError: onCheckVerifyError,
      onCompleted: onCheckVerifyCompleted,
    });
  // ? state
  const [phoneNumber, setPhoneNumber] = useState("");
  const geo = useReactiveVar(geoVar);
  // ? fn
  const onPhoneNumberChange = useCallback(
    (e) => setPhoneNumber(e.target.value),
    [],
  );
  const onSendCodeClick = useCallback(() => {
    setPhoneNumber(parsePhoneNumber(phoneNumber, geo.country));
    sendVerifyCodeUser({
      variables: { input: { phoneNumber, type: SendVerifyCodeType.REGISTER } },
    });
  }, [geo, phoneNumber]);
  const onFormSubmit: SubmitHandler<RegisterFormData> = useCallback(
    async ({ verifyCode }) => {
      await checkVerifyCodeUser({
        variables: { input: { phoneNumber, verifyCode } },
      });
    },
    [],
  );
  return (
    <Form
      onSubmit={onFormSubmit}
      schema={RegisterSchema.stepTwo}
      button={{
        name: "인증 코드 확인",
        color: "green",
        loading: checkVerfiyCodeUserLoading,
        disabled: !geo,
      }}
    >
      <SendVeifyCode
        name="phoneNumber"
        placeholder="Phone Number"
        onChange={onPhoneNumberChange}
        onClick={onSendCodeClick}
        loading={sendVerifyCodeUserLoading}
        disabled={phoneNumber.length < 8 || Number(phoneNumber) === NaN}
        called={sendVerifyCodeUserCalled}
      />
    </Form>
  );
};

export default StepTwoCont as React.FC<StepTwoContProps>;
