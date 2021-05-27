import React from "react";
import { Form, Input, CenterFormLayout, Link } from "~/components";
import { findPasswordSchema } from "~/lib";
import { useFindPassword } from "~/lib";

const FindPasswordPage: React.FC = () => {
  const { onFormSubmit } = useFindPassword();
  return (
    <CenterFormLayout description="비밀번호 찾기">
      <Form
        onSubmit={onFormSubmit}
        schema={findPasswordSchema}
        button={{ name: "비밀번호 재설정 코드 보내기" }}
      >
        <Input name="phoneNumber" placeholder="PhoneNumber" />
      </Form>
      <Link href="/login" right>
        로그인하러 가기
      </Link>
    </CenterFormLayout>
  );
};
export default FindPasswordPage;
