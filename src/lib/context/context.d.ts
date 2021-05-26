import { Dispatch, SetStateAction } from "react";
import { OauthProfile } from "../hook/pages/useRegister";
import { ctxObj } from "./context";

export type Value = RegisterPageOauth;

export interface ContextProviderProps {
  children: ReactNode;
  ctxName: Readonly<keyof typeof ctxObj>;
  value: Value;
}

export interface RegisterPageOauth {
  setOauthProfile: Dispatch<SetStateAction<OauthProfile>>;
}
