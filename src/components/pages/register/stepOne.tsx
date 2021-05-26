import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { Button } from "~/components/button";
import { useFacebookLogIn, useGoogleLogIn } from "~/lib/hook/common";

interface StepOneProps {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

export const StepOne: React.FC<StepOneProps> = ({ setStep }) => {
  const { onGoogleClick } = useGoogleLogIn();
  const { onFacebookClick } = useFacebookLogIn();
  return (
    <>
      <Button
        color="red"
        onClick={() => {
          onGoogleClick();
          setStep(2);
        }}
      >
        <AiOutlineGoogle className="absolute left-0 text-2xl" />
        구글로 회원가입
      </Button>
      <Button
        color="blue"
        onClick={() => {
          onFacebookClick();
          setStep(2);
        }}
      >
        <FaFacebookSquare className="absolute left-0 text-2xl" />
        페이스북으로 회원가입
      </Button>
      <Button color="green" onClick={() => setStep(2)}>
        휴대폰 번호로 회원가입
      </Button>
    </>
  );
};
export default React.memo(StepOne);
