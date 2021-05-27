import * as yup from "yup";

export interface LogInFormData {
  id: string;
  password: string;
}

const logInSchema = yup.object().shape({
  id: yup.string().trim().required(),
  password: yup
    .string()
    .trim()
    .required()
    .matches(
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      { message: "8자 이상, 대문자/특수문자 최소 1개 이상 포함" },
    ),
});
export default logInSchema;
