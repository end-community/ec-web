import React from "react";
import { SubmitHandler } from "react-hook-form";
import { Form, Input, CenterFormLayout, Line, Link } from "~/components";
import { FindPasswordFormData, findPasswordSchema } from "~/lib";

const LogIn: React.FC = () => {
  const onFormSubmit: SubmitHandler<FindPasswordFormData> = (data) => {
    console.log(data);
  };

  return (
    <CenterFormLayout description="비밀번호 찾기">
      <Form
        onSubmit={onFormSubmit}
        schema={findPasswordSchema}
        buttonName="비밀번호 재설정 코드 보내기"
      >
        <Input name="phoneNumber" placeholder="PhoneNumber" />
      </Form>
      <Line />
      <Link href="/login" right>
        로그인하러 가기
      </Link>
    </CenterFormLayout>
  );
};
export default LogIn;
