import { useRouter } from "next/dist/client/router";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import {
  Button,
  Form,
  Input,
  Line,
  Link,
  CenterFormLayout,
} from "~/components";
import { LogInFormData, logInSchema } from "~/lib";

const LogIn: React.FC = () => {
  const { push } = useRouter();
  const onRegisterClick = () => push("/register");
  const onFormSubmit: SubmitHandler<LogInFormData> = (data) => {
    console.log(data);
  };
  const buttonList = [
    {
      children: (
        <>
          <FcGoogle className="absolute left-0 text-2xl" />
          구글로 로그인
        </>
      ),
      color: "white",
      onClick: onRegisterClick,
    },
    {
      children: (
        <>
          <FaFacebookSquare className="absolute left-0 text-2xl text-blue-800" />
          페이스북으로 로그인
        </>
      ),
      color: "white",
      onClick: onRegisterClick,
    },
    {
      children: (
        <>
          <RiKakaoTalkFill className="absolute left-0 text-2xl text-yellow-400" />
          카카오로 로그인
        </>
      ),
      color: "white",
      onClick: onRegisterClick,
    },
    { children: "회원가입", color: "green", onClick: onRegisterClick },
  ] as const;

  return (
    <CenterFormLayout description="로그인">
      <Form onSubmit={onFormSubmit} schema={logInSchema} buttonName="로그인">
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
      {buttonList.map(({ children, color, onClick }, idx) => (
        <Button
          key={`loginPage-button__${idx}`}
          color={color}
          onClick={onClick}
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
export default LogIn;
