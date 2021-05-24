import { makeVar, TypePolicy } from "@apollo/client";

interface UserGender {
  MALE: "MALE";
  FEMALE: "FEMALE";
}
export interface UserVar {
  id: number;
  nickname: string;
  phoneNumber?: string;
  email?: string;
  thumbnail?: string;
  birthDate: Date;
  gender?: UserGender;
}

export const userVar = makeVar<null | UserVar>(null);

export default {
  read() {
    return userVar();
  },
} as TypePolicy["fields"];
