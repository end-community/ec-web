import {
  createUserMutation,
  createUserMutationVariables,
} from "@/__generated__/createUserMutation";
import { UserProvider } from "@/__generated__/globalTypes";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { CREATE_USER, isLoggedInVar } from "~/apollo";
import { Form } from "~/components/common";
import { StepThreeComp } from "~/components/pages/register";
import { RegisterFormData, RegisterSchema, useAppCtx } from "~/lib";

interface StepThreeContProps {}

const StepThreeCont: React.FC<StepThreeContProps> = (props) => {
  // ? gql
  const onCompleted = ({ createUser: { token } }) => {
    localStorage.setItem("ect", token);
    isLoggedInVar(true);
    toast("환영합니다!");
    push("/");
  };
  const createUserMutation = useMutation<
    createUserMutation,
    createUserMutationVariables
  >(CREATE_USER, { onCompleted });
  // ? state
  const { push } = useRouter();
  const [as] = useAppCtx();
  // ? fn
  const onFormSubmit: SubmitHandler<RegisterFormData> = useCallback(
    async ({ phoneNumber, year, month, date, password, gender }) => {
      const input = {
        phoneNumber,
        password,
        birthDate: new Date().setFullYear(year, month, date),
        gender,
        ...(as.oauthProfile || { provider: UserProvider.LOCAL }),
      };
      createUserMutation[0]({ variables: { input } });
    },
    [],
  );
  return (
    <Form
      onSubmit={onFormSubmit}
      schema={RegisterSchema.stepThree}
      button={{
        name: "회원가입",
        color: "green",
        loading: createUserMutation[1].loading,
      }}
    >
      <StepThreeComp />
    </Form>
  );
};

export default StepThreeCont as React.FC<StepThreeContProps>;
