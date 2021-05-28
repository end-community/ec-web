/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum SendVerifyCodeType {
  FIND_PASSWORD = "FIND_PASSWORD",
  REGISTER = "REGISTER",
}

export enum UserGender {
  FEMALE = "FEMALE",
  MALE = "MALE",
}

export enum UserProvider {
  FACEBOOK = "FACEBOOK",
  GOOGLE = "GOOGLE",
  KAKAO = "KAKAO",
  LOCAL = "LOCAL",
}

export interface CheckVerifyCodeUserInput {
  phoneNumber?: string | null;
  email?: string | null;
  verifyCode: string;
}

export interface CreateUserInput {
  phoneNumber: string;
  email?: string | null;
  birthDate?: any | null;
  gender?: UserGender | null;
  provider: UserProvider;
  oauthId?: string | null;
  password: string;
}

export interface LogInUserLocalInput {
  nickname?: string | null;
  phoneNumber?: string | null;
  password: string;
}

export interface LogInUserOauthInput {
  provider: UserProvider;
  oauthId?: string | null;
}

export interface SendVerifyCodeUserInput {
  phoneNumber?: string | null;
  email?: string | null;
  type: SendVerifyCodeType;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
