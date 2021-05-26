import React from "react";
import { Button } from "~/components/button";
import { Input } from "~/components/input";

interface StepTwoProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
  phoneNumber: string;
}

export const StepTwo: React.FC<StepTwoProps> = ({
  onChange,
  onClick,
  loading,
  phoneNumber,
}) => (
  <>
    <div className="grid grid-cols-3 gap-3">
      <Input
        onChange={onChange}
        divclsName="col-span-2"
        name="phoneNumber"
        placeholder="Phone Number"
      />
      <Button
        type="button"
        className="my-2"
        onClick={onClick}
        loading={loading}
        disabled={phoneNumber.length <= 10}
      >
        코드 발송
      </Button>
    </div>
    <Input defaultValue="" name="verifyCode" placeholder="code" />
  </>
);
export default React.memo(StepTwo);
