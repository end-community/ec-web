import { UserGender } from "@/__generated__/globalTypes";
import React from "react";
import { Input, Radio, Select } from "~/components/common";
import { getBirthDate } from "~/lib";

const StepThree: React.FC = () => (
  <>
    <Input
      autoComplete="new-password"
      type="password"
      name="password"
      placeholder="New Password"
    />
    <div className="grid grid-cols-3 gap-3 my-2">
      {[
        {
          name: "year",
          options: getBirthDate("year").map((value) => ({ value })),
        },
        {
          name: "month",
          options: getBirthDate("month").map((value) => ({ value })),
        },
        {
          name: "date",
          options: getBirthDate("date").map((value) => ({ value })),
        },
      ].map(({ name, options }) => (
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
  </>
);

export default StepThree as React.FC;
