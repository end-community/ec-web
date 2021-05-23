import { UserGender } from "@/__generated__/globalTypes";
import React from "react";
import {
  Radio,
  Select,
  Form,
  Input,
  CenterFormLayout,
  Link,
} from "~/components";
import { RegisterSchema, useRegister } from "~/lib";

const Register: React.FC = () => {
  const { selectList, onFormSubmit, loading, error } = useRegister();
  return (
    <CenterFormLayout description="회원가입">
      <Form
        onSubmit={onFormSubmit}
        schema={RegisterSchema}
        buttonName="회원가입"
        buttonColor="green"
      >
        <Input
          autoComplete="username"
          name="phoneNumber"
          placeholder="Phone Number"
        />
        <Input
          autoComplete="new-password"
          type="password"
          name="password"
          placeholder="New Password"
        />
        <div className="grid grid-cols-3 gap-3 my-2">
          {selectList.map(({ name, options }) => (
            <Select key={`select-${name}`} name={name} options={options} />
          ))}
        </div>
        <div className="flex justify-around items-center my-2">
          <Radio name="gender" className="w-1/3" value={UserGender.FEMALE}>
            Female
          </Radio>
          <Radio name="gender" className="w-1/3" value={UserGender.MALE}>
            Male
          </Radio>
        </div>
      </Form>
      <Link href="/login" right>
        로그인하러 가기
      </Link>
    </CenterFormLayout>
  );
};
export default Register;
