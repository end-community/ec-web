import { UserGender } from "@/__generated__/globalTypes";
import * as yup from "yup";

export interface RegisterFormData {
  phoneNumber: string;
  password: string;
  year: number;
  month: number;
  date: number;
  gender: UserGender;
}

const registerSchema = yup.object().shape({
  phoneNumber: yup.string().trim().required(),
  password: yup
    .string()
    .trim()
    .required()
    .matches(
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      { message: "8자 이상, 대문자/특수문자 최소 1개 이상 포함" },
    ),
  year: yup.number().positive().integer().required(),
  month: yup.number().positive().integer().required(),
  date: yup.number().positive().integer().required(),
  gender: yup.string().oneOf([UserGender.FEMALE, UserGender.MALE]).required(),
});
export default registerSchema;
