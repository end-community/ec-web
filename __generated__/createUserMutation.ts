/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserInput, UserGender } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createUserMutation
// ====================================================

export interface createUserMutation_createUser_data {
  __typename: "User";
  id: number;
  nickname: string;
  phoneNumber: string | null;
  email: string | null;
  thumbnail: string | null;
  birthDate: any | null;
  gender: UserGender | null;
}

export interface createUserMutation_createUser {
  __typename: "CreateUserOutput";
  data: createUserMutation_createUser_data;
  token: string;
}

export interface createUserMutation {
  createUser: createUserMutation_createUser;
}

export interface createUserMutationVariables {
  input: CreateUserInput;
}
