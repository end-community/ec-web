import React from "react";
import { Button, Form, Input, Line, Link } from "~/components/common";
import { CenterFormLayout } from "~/components/layout";
import { logInSchema, useLogIn } from "~/lib";

const LogInPage: React.FC = () => {
  const { buttonList, onFormSubmit } = useLogIn();
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
