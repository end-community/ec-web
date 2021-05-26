import React, { createContext, useContext } from "react";
import { ContextProviderProps, RegisterPageOauth, Value } from "./context.d";

export const ctxObj = {
  registerPage: createContext<RegisterPageOauth>(null),
};

export const useCtx = (
  ctxName: keyof typeof ctxObj,
  desc?: string,
): null | Value => {
  const ctx = useContext(ctxObj[ctxName]);
  if (process.env.NODE_ENV === "development" && !ctx) {
    console.log(
      `${
        desc ? `[${desc}] ` : ""
      }context of ${ctxName} is null, should be wrapped provider`,
    );
  }
  return ctx as null | Value;
};

const ctxProvider = ({
  children,
  ctxName,
  value,
}: ContextProviderProps): JSX.Element => {
  const Ctx = ctxObj[ctxName];
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};
export default ctxProvider;
