import * as yup from "yup";
import { emailRegex } from "./regex";

export interface LogInFormData {
  id: string;
  password: string;
}

const logInSchema = yup.object().shape({
  id: yup.string().trim().required(),
  password: yup.string().trim().required().matches(emailRegex, {
    message: "8자 이상, 대문자/특수문자 최소 1개 이상 포함",
  }),
});
export default logInSchema;
