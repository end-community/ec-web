import React, { useState } from "react";
import { Link } from "~/components/common";
import { CenterFormLayout } from "~/components/layout";
import {
  StepOneCont,
  StepThreeCont,
  StepTwoCont,
} from "~/containers/pages/register";

// only UI Render, UI Event, Variables
const RegisterPage: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const renderContainer = {
    1: <StepOneCont setStep={setStep} />,
    2: <StepTwoCont setStep={setStep} />,
    3: <StepThreeCont />,
  };
  return (
    <CenterFormLayout description="회원가입">
      {renderContainer[step]}
      <Link href="/login" right>
        로그인하러 가기
      </Link>
    </CenterFormLayout>
  );
};

export default RegisterPage;
