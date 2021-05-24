import React from "react";
import {
  Button,
  Form,
  Input,
  Line,
  Link,
  CenterFormLayout,
} from "~/components";
import { logInSchema } from "~/lib";
import { useLogIn } from "~/lib/hook/pages";

const LogIn: React.FC = () => {
  const { onFormSubmit, buttonList } = useLogIn();
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
