import {
  createUserMutation,
  createUserMutationVariables,
} from "@/__generated__/createUserMutation";
import { useMutation } from "@apollo/client";
import { SubmitHandler } from "react-hook-form";
import { CREATE_USER_GQL, getBirthDate, RegisterFormData } from "~/lib";

const useRegister = () => {
  const selectList = [
    { name: "year", options: getBirthDate("year") },
    { name: "month", options: getBirthDate("month") },
    { name: "date", options: getBirthDate("date") },
  ];
  const onCompleted = (data: createUserMutation) => {};
  const [createUserMutation, { loading, error }] = useMutation<
    createUserMutation,
    createUserMutationVariables
  >(CREATE_USER_GQL, {
    onCompleted,
  });
  const onFormSubmit: SubmitHandler<RegisterFormData> = ({
    phoneNumber,
    password,
    year,
    month,
    date,
    gender,
  }) => {
    const birthDate = new Date().setFullYear(year, month, date);
    createUserMutation({
      variables: {
        input: { phoneNumber, password, birthDate, gender },
      },
    });
  };
  return { selectList, onFormSubmit, loading, error };
};

export default useRegister;
