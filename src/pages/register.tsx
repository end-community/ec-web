import { UserGender } from "@/__generated__/globalTypes";
import React, { useEffect } from "react";
import {
  Form,
  CenterFormLayout,
  Link,
  Input,
  Select,
  Radio,
  Button,
} from "~/components";
import { getBirthDate, RegisterSchema, useRegister } from "~/lib";

const Register: React.FC = () => {
  const {
    step,
    createUserMutationLoading,
    sendVerifyCodeUserMutationLoading,
    sendVerifyCodeUserMutationError,
    checkVerifyCodeUserMutationLoading,
    onFormSubmit,
    onInputChange,
    onSendCodeClick,
    _phoneNumber,
  } = useRegister();
  useEffect(() => {
    console.log(sendVerifyCodeUserMutationError);
  }, [sendVerifyCodeUserMutationError]);
  return (
    <CenterFormLayout description="회원가입">
      <Form
        onSubmit={onFormSubmit}
        schema={step === 1 ? RegisterSchema.stepOne : RegisterSchema.stepTwo}
        button={{
          name: step === 1 ? "인증 코드 확인" : "회원가입",
          color: "green",
          loading:
            step === 1
              ? checkVerifyCodeUserMutationLoading
              : createUserMutationLoading,
        }}
      >
        {step === 1 ? (
          <>
            <div className="grid grid-cols-3 gap-3">
              <Input
                onChange={onInputChange}
                divclsName="col-span-2"
                name="phoneNumber"
                placeholder="Phone Number"
              />
              <Button
                type="button"
                className="my-2"
                onClick={onSendCodeClick}
                loading={sendVerifyCodeUserMutationLoading}
                disabled={_phoneNumber.length <= 10}
              >
                코드 발송
              </Button>
            </div>
            <Input defaultValue="" name="verifyCode" placeholder="code" />
          </>
        ) : (
          <>
            <Input
              autoComplete="new-password"
              type="password"
              name="password"
              placeholder="New Password"
            />
            <div className="grid grid-cols-3 gap-3 my-2">
              {[
                {
                  name: "year",
                  options: getBirthDate("year").map((value) => ({ value })),
                },
                {
                  name: "month",
                  options: getBirthDate("month").map((value) => ({ value })),
                },
                {
                  name: "date",
                  options: getBirthDate("date").map((value) => ({ value })),
                },
              ].map(({ name, options }) => (
                <Select key={`select-${name}`} name={name} options={options} />
              ))}
            </div>
            <div className="flex justify-around items-center my-2">
              <Radio name="gender" className="w-1/3" value={UserGender.FEMALE}>
                Female
              </Radio>
              <Radio name="gender" className="w-1/3" value={UserGender.MALE}>
                Male
              </Radio>
            </div>
          </>
        )}
      </Form>
      <Link href="/login" right>
        로그인하러 가기
      </Link>
    </CenterFormLayout>
  );
};
export default Register;
