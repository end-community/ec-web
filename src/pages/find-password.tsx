import React from "react";
import { Form, Link, SendVeifyCode } from "~/components/common";
import { CenterFormLayout } from "~/components/layout";
import { findPasswordSchema, useFindPassword } from "~/lib";

const FindPasswordPage: React.FC = () => {
  const {
    value,
    sendVerifyCodeUserLoading,
    sendVerifyCodeUserCalled,
    onSendVerifyChange,
    onSendVerifyClick,
    onFormSubmit,
    disabled,
  } = useFindPassword();
  return (
    <CenterFormLayout description="비밀번호 찾기">
      <Form
        onSubmit={onFormSubmit}
        schema={findPasswordSchema}
        button={{ name: "비밀번호 재설정 코드 보내기" }}
      >
        <SendVeifyCode
          name="value"
          placeholder="Phone Number Or Email"
          onChange={onSendVerifyChange}
          onClick={onSendVerifyClick}
          disabled={disabled}
          loading={sendVerifyCodeUserLoading}
          called={sendVerifyCodeUserCalled}
        />
      </Form>
      <Link href="/login" right>
        로그인하러 가기
      </Link>
    </CenterFormLayout>
  );
};
export default FindPasswordPage;
