import { UserProvider } from "@/__generated__/globalTypes";
import React, { useCallback, useMemo } from "react";
import { SubmitHandler } from "react-hook-form";
import { Form, CenterFormLayout, Link } from "~/components";
import { StepOne, StepTwo, StepThree } from "~/components/pages/register";
import {
  RegisterSchema,
  useRegister,
  RegisterFormData,
  parsePhoneNumber,
} from "~/lib";

// only UI Render, UI Event, Variables
const RegisterPage: React.FC = () => {
  const {
    as,
    step,
    setStep,
    _phoneNumber,
    setPhoneNumber,
    parsedPhoneNumber,
    setParsedPhoneNumber,
    country,
    createUserMutation,
    sendVerifyCodeUserMutation,
    checkVerifyCodeUserMutation,
  } = useRegister();

  const onPhoneNumberChange = useCallback(
    (e) => setPhoneNumber(e.target.value),
    [],
  );
  const onSendCodeClick = useCallback(() => {
    const phoneNumber = parsePhoneNumber(_phoneNumber, country);
    setParsedPhoneNumber(phoneNumber);
    sendVerifyCodeUserMutation[0]({
      variables: { input: { phoneNumber } },
    });
  }, [_phoneNumber, country]);
  const onFormSubmit: SubmitHandler<RegisterFormData> = useCallback(
    async ({ verifyCode, year, month, date, password, gender }) => {
      switch (step) {
        case 2:
          await checkVerifyCodeUserMutation[0]({
            variables: {
              input: {
                phoneNumber: parsedPhoneNumber,
                verifyCode,
              },
            },
          });
          break;
        case 3:
          const input = {
            phoneNumber: parsedPhoneNumber,
            password,
            birthDate: new Date().setFullYear(year, month, date),
            gender,
            ...(as.oauthProfile || { provider: UserProvider.LOCAL }),
          };
          createUserMutation[0]({ variables: { input } });
          break;
        default:
          return null;
      }
    },
    [step, parsedPhoneNumber],
  );
  const renderByStep = useMemo(() => {
    switch (step) {
      case 1:
        return <StepOne setStep={setStep} />;
      case 2:
        return (
          <Form
            onSubmit={onFormSubmit}
            schema={RegisterSchema.stepTwo}
            button={{
              name: "인증 코드 확인",
              color: "green",
              loading: checkVerifyCodeUserMutation[1].loading,
            }}
          >
            <StepTwo
              onChange={onPhoneNumberChange}
              onClick={onSendCodeClick}
              loading={sendVerifyCodeUserMutation[1].loading}
              phoneNumber={_phoneNumber}
              called={sendVerifyCodeUserMutation[1].called}
            />
          </Form>
        );
      case 3:
        return (
          <Form
            onSubmit={onFormSubmit}
            schema={RegisterSchema.stepThree}
            button={{
              name: "회원가입",
              color: "green",
              loading: createUserMutation[1].loading,
            }}
          >
            <StepThree />
          </Form>
        );
    }
  }, [step, _phoneNumber, sendVerifyCodeUserMutation[1]]);

  return (
    <CenterFormLayout description="회원가입">
      {renderByStep}
      <Link href="/login" right>
        로그인하러 가기
      </Link>
    </CenterFormLayout>
  );
};
export default RegisterPage;
