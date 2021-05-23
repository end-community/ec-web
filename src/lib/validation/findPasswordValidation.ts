import * as yup from "yup";

export interface FindPasswordFormData {
  phoneNumber: string;
}

export const findPasswordSchema = yup.object().shape({
  phoneNumber: yup.string().trim().required(),
});
export default findPasswordSchema;
