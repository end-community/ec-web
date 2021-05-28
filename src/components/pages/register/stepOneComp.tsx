import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { Button } from "~/components/common";

interface StepOneProps {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
  onGoogleClick: () => void;
  googleBtnDisabled: boolean;
  onFacebookClick: () => void;
  fbBtnDisabled: boolean;
}

const StepOneComp: React.FC<StepOneProps> = ({
  setStep,
  onGoogleClick,
  googleBtnDisabled,
  onFacebookClick,
  fbBtnDisabled,
}) => (
  <>
    <Button color="red" onClick={onGoogleClick} disabled={googleBtnDisabled}>
      <AiOutlineGoogle className="absolute left-0 text-2xl" />
      구글로 회원가입
    </Button>
    <Button color="blue" onClick={onFacebookClick} disabled={fbBtnDisabled}>
      <FaFacebookSquare className="absolute left-0 text-2xl" />
      페이스북으로 회원가입
    </Button>
    <Button color="green" onClick={() => setStep(2)}>
      휴대폰 번호로 회원가입
    </Button>
  </>
);
export default StepOneComp as React.FC<StepOneProps>;
