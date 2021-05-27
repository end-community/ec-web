import React from "react";
import { SubmitHandler } from "react-hook-form";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import {
  Button,
  Form,
  Input,
  Line,
  Link,
  CenterFormLayout,
} from "~/components";
import { LogInFormData, logInSchema, parsePhoneNumber, useLogIn } from "~/lib";

const LogInPage: React.FC = () => {
  const {
    push,
    onGoogleClick,
    googleBtnDisabled,
    onFacebookClick,
    fbBtnDisabled,
    country,
    logInQuery,
  } = useLogIn();
  const onRegisterClick = () => push("/register");
  const onFormSubmit: SubmitHandler<LogInFormData> = ({ id, password }) => {
    const phoneNumber = parsePhoneNumber(id, country);
    logInQuery({
      variables: { input: { phoneNumber: phoneNumber || id, password } },
    });
  };
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
      onClick: onRegisterClick,
      disabled: false,
    },
  ] as const;
  return (
    <CenterFormLayout description="로그인">
      <Form
        onSubmit={onFormSubmit}
        schema={logInSchema}
        button={{ name: "로그인" }}
      >
        <Input
          autoComplete="username"
          name="id"
          placeholder="Nickname or Phone Number"
        />
        <Input
          autoComplete="current-password"
          type="password"
          name="password"
          placeholder="Password"
        />
      </Form>
      <Line />
      {buttonList.map(({ children, color, onClick, disabled }, idx) => (
        <Button
          key={`loginPage-button__${idx}`}
          color={color}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </Button>
      ))}
      <Link href="/find-password" right>
        비밀번호 찾기
      </Link>
    </CenterFormLayout>
  );
};
export default LogInPage;
