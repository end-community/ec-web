import React from "react";
import { StepOneComp } from "~/components/pages/register";
import { useFacebookLogIn, useGoogleLogIn } from "~/lib";

interface StepOneContProps {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

const StepOneCont: React.FC<StepOneContProps> = ({ setStep }) => {
  const googleState = useGoogleLogIn({ setStep });
  const fbState = useFacebookLogIn({ setStep });
  return <StepOneComp setStep={setStep} {...googleState} {...fbState} />;
};

export default StepOneCont as React.FC<StepOneContProps>;
