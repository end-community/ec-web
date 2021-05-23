import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Button, ButtonProps } from "~/components";

interface FormProps {
  onSubmit: SubmitHandler<FieldValues>;
  schema: any;
  buttonName?: string;
  buttonColor?: ButtonProps["color"];
}

export const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  schema,
  buttonName,
  buttonColor = "blue",
}) => {
  const methods = useForm({ resolver: yupResolver(schema), mode: "onChange" });
  const { isDirty, isValid } = methods.formState;
  return (
    <FormProvider {...methods}>
      <form className="flex flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <Button
          type="submit"
          className="mt-1"
          color={buttonColor}
          disabled={!isDirty || !isValid}
        >
          {buttonName}
        </Button>
      </form>
    </FormProvider>
  );
};
