/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserGender } from "./globalTypes";

// ====================================================
// GraphQL query operation: meQuery
// ====================================================

export interface meQuery_me {
  __typename: "User";
  id: number;
  nickname: string;
  phoneNumber: string;
  email: string | null;
  thumbnail: string | null;
  birthDate: any | null;
  gender: UserGender | null;
}

export interface meQuery {
  me: meQuery_me;
}
