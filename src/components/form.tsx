import { ApolloError } from "@apollo/client";
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
  onSubmit?: SubmitHandler<FieldValues>;
  schema: any;
  button?: {
    name?: string;
    color?: ButtonProps["color"];
    loading?: boolean;
  };
  error?: ApolloError;
}

export const Form: React.FC<FormProps> = React.memo(
  ({ children, onSubmit, schema, button: { name, color, loading }, error }) => {
    const methods = useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });
    const { isDirty, isValid } = methods.formState;
    return (
      <FormProvider {...methods}>
        <form
          className="flex flex-col"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {error && <p className="text-red-600 text-center">{error.message}</p>}
          {children}
          <Button
            type="submit"
            className="mt-1"
            color={color}
            disabled={!isDirty || !isValid}
            loading={loading}
          >
            {name}
          </Button>
        </form>
      </FormProvider>
    );
  },
);
