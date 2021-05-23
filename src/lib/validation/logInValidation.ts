import * as yup from "yup";

export interface LogInFormData {
  id: string;
  password: string;
}

const logInSchema = yup.object().shape({
  id: yup.string().trim().required(),
  password: yup.string().trim().required(),
});
export default logInSchema;
