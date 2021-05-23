/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserGender } from "./globalTypes";

// ====================================================
// GraphQL fragment: UserParts
// ====================================================

export interface UserParts {
  __typename: "User";
  id: number;
  nickname: string;
  phoneNumber: string | null;
  email: string | null;
  thumbnail: string | null;
  birthDate: any | null;
  gender: UserGender | null;
}
