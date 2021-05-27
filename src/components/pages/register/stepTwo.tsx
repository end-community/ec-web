import React from "react";
import { Button, Input } from "~/components";

interface StepTwoProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
  phoneNumber: string;
  called: boolean;
}

export const StepTwo: React.FC<StepTwoProps> = ({
  onChange,
  onClick,
  loading,
  phoneNumber,
  called,
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
        disabled={!(phoneNumber.length >= 8 && phoneNumber.length <= 16)}
      >
        {called ? "코드 재발송" : "코드 발송"}
      </Button>
    </div>
    <Input defaultValue="" name="verifyCode" placeholder="code" />
  </>
);
export default React.memo(StepTwo);
