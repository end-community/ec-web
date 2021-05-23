/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserGender {
  FEMALE = "FEMALE",
  MALE = "MALE",
}

export interface CreateUserInput {
  phoneNumber?: string | null;
  birthDate?: any | null;
  gender?: UserGender | null;
  oauthId?: string | null;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
