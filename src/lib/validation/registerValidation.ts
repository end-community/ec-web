import { UserGender } from "@/__generated__/globalTypes";
import * as yup from "yup";
import { passwordRegex } from "./regex";

export interface RegisterFormData {
  phoneNumber: string;
  verifyCode: string;
  password: string;
  year: number;
  month: number;
  date: number;
  gender: UserGender;
}
const registerSchema = {
  stepTwo: yup.object().shape({
    phoneNumber: yup.string().trim().min(8).required(),
    verifyCode: yup.string().trim().max(6).required(),
  }),
  stepThree: yup.object().shape({
    password: yup.string().trim().required().matches(passwordRegex, {
      message: "8자 이상, 대문자/특수문자 최소 1개 이상 포함",
    }),
    year: yup.number().positive().integer().required(),
    month: yup.number().positive().integer().required(),
    date: yup.number().positive().integer().required(),
    gender: yup.string().oneOf([UserGender.FEMALE, UserGender.MALE]).required(),
  }),
};

export default registerSchema;
