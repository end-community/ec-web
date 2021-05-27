import { SubmitHandler } from "react-hook-form";
import { FindPasswordFormData } from "~/lib";

const useLogIn = () => {
  const onFormSubmit: SubmitHandler<FindPasswordFormData> = (data) => {
    console.log(data);
  };
  return { onFormSubmit };
};

export default useLogIn;
