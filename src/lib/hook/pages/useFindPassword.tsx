import {
  checkVerifyCodeUserMutation,
  checkVerifyCodeUserMutationVariables,
} from "@/__generated__/checkVerifyCodeUserMutation";
import { SendVerifyCodeType } from "@/__generated__/globalTypes";
import {
  sendVerifyCodeUserMutation,
  sendVerifyCodeUserMutationVariables,
} from "@/__generated__/sendVerifyCodeUserMutation";
import { useMutation, useReactiveVar } from "@apollo/client";
import { PhoneNumber } from "libphonenumber-js";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import {
  CHECK_VERIFY_CODE_USER,
  geoVar,
  SEND_VERIFY_CODE_USER,
} from "~/apollo";
import { FindPasswordFormData } from "~/lib";
import { getErrRes, parsePhoneNumber } from "~/lib/common";
import { emailRegex } from "~/lib/validation";

const useLogIn = () => {
  // state
  const geo = useReactiveVar(geoVar);
  const [value, setValue] = useState("");
  const [key, setKey] = useState<"email" | "phoneNumber">();
  // gql
  const onSendVerifyCodeCompleted = () => {
    toast("인증 코드가 전송되었습니다.", { type: toast.TYPE.SUCCESS });
  };
  const onSendVerifyCodeError = (err) => {
    const { errCode } = getErrRes(err);
    if (errCode === "3") {
      toast("등록되지 않은 유저입니다.", { type: toast.TYPE.WARNING });
    }
  };
  const [
    sendVerifyCodeUserMutation,
    { loading: sendVerifyCodeUserLoading, called: sendVerifyCodeUserCalled },
  ] = useMutation<
    sendVerifyCodeUserMutation,
    sendVerifyCodeUserMutationVariables
  >(SEND_VERIFY_CODE_USER, {
    onCompleted: onSendVerifyCodeCompleted,
    onError: onSendVerifyCodeError,
  });
  const onCheckVerifyCodeCompleted = () => {
    toast("비밀번호가 변경되었습니다.", { type: toast.TYPE.SUCCESS });
  };
  const onCheckVerifyCodeError = (err) => {
    const { errCode } = getErrRes(err);
  };
  const [checkVerifyCodeUser] = useMutation<
    checkVerifyCodeUserMutation,
    checkVerifyCodeUserMutationVariables
  >(CHECK_VERIFY_CODE_USER, {
    onCompleted: onCheckVerifyCodeCompleted,
    onError: onCheckVerifyCodeError,
  });
  // fn
  const onSendVerifyChange = (e) => setValue(e.target.value);
  const onSendVerifyClick = () => {
    const key = emailRegex.test(value) ? "email" : "phoneNumber";
    setKey(key);
    const parsedPhoneNumber =
      key === "phoneNumber" && parsePhoneNumber(value, geo.country);
    sendVerifyCodeUserMutation({
      variables: {
        input: {
          [key]: key === "email" ? value : parsedPhoneNumber,
          type: SendVerifyCodeType.FIND_PASSWORD,
        },
      },
    });
  };
  const onFormSubmit: SubmitHandler<FindPasswordFormData> = ({
    value,
    verifyCode,
  }) => {
    checkVerifyCodeUser({ variables: { input: { [key]: value, verifyCode } } });
  };

  return {
    value,
    sendVerifyCodeUserLoading,
    sendVerifyCodeUserCalled,
    onSendVerifyChange,
    onSendVerifyClick,
    onFormSubmit,
    disabled: value.length < 8 || !geo,
  };
};

export default useLogIn;
