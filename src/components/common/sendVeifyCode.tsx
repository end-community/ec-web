import React from "react";
import { Button, Input } from "~/components/common";

interface StepTwoProps {
  name: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
  called: boolean;
  disabled: boolean;
}

const SnedVerifyCode: React.FC<StepTwoProps> = ({
  name,
  placeholder,
  onChange,
  onClick,
  loading,
  disabled,
  called,
}) => (
  <>
    <div className="grid grid-cols-3 gap-3">
      <Input
        onChange={onChange}
        divclsName="col-span-2"
        name={name}
        placeholder={placeholder}
      />
      <Button
        type="button"
        className="my-2"
        onClick={onClick}
        loading={loading}
        disabled={disabled}
      >
        {called ? "코드 재발송" : "코드 발송"}
      </Button>
    </div>
    <Input defaultValue="" name="verifyCode" placeholder="code" />
  </>
);
export default React.memo(SnedVerifyCode) as React.FC<StepTwoProps>;
