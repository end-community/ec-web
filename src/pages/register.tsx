import { UserProvider } from "@/__generated__/globalTypes";
import React, { useMemo } from "react";
import { SubmitHandler } from "react-hook-form";
import { Form, CenterFormLayout, Link } from "~/components";
import { StepTwo, StepThree } from "~/components/pages/register";
import { StepOne } from "~/components/pages/register/stepOne";
import { RegisterSchema, useRegister, RegisterFormData } from "~/lib";
import { CtxProvider } from "~/lib/context";

const Register: React.FC = () => {
  const {
    step,
    setStep,
    _phoneNumber,
    setPhoneNumber,
    oauthProfile,
    setOauthProfile,
    createUserMutation,
    sendVerifyCodeUserMutation,
    checkVerifyCodeUserMutation,
  } = useRegister();

  const onInputChange = (e) => setPhoneNumber(e.target.value);
  const onSendCodeClick = () => {
    sendVerifyCodeUserMutation[0]({
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
      case 2:
        await checkVerifyCodeUserMutation[0]({
          variables: { input: { verifyCode } },
        });
        setStep(3);
        break;
      case 3:
        createUserMutation[0]({
          variables: {
            input: {
              phoneNumber,
              password,
              birthDate: new Date().setFullYear(year, month, date),
              gender,
              ...(oauthProfile || { provider: UserProvider.LOCAL }),
            },
          },
        });
        break;
      default:
        return null;
    }
  };

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
              onChange={onInputChange}
              onClick={onSendCodeClick}
              loading={sendVerifyCodeUserMutation[1].loading}
              phoneNumber={_phoneNumber}
            />
          </Form>
        );
      case 3:
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
        </Form>;
        return;
    }
  }, [step]);

  return (
    <CenterFormLayout description="회원가입">
      <CtxProvider value={{ setOauthProfile }} ctxName="registerPage">
        {renderByStep}
      </CtxProvider>
      <Link href="/login" right>
        로그인하러 가기
      </Link>
    </CenterFormLayout>
  );
};
export default Register;
