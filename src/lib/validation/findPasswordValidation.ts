import * as yup from "yup";

export interface FindPasswordFormData {
  value: string;
  verifyCode: string;
}

export const findPasswordSchema = yup.object().shape({
  value: yup.string().trim().required().min(8).max(128),
  verifyCode: yup.string().trim().max(6).required(),
});
export default findPasswordSchema;
