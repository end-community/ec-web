import React, { createContext, useContext } from "react";
import { CtxProviderProps } from "./context.d";

const AppCtx = createContext<CtxProviderProps["value"]>(null);

export const useCtx = () => {
  const ctx = useContext(AppCtx);
  if (!ctx) throw Error("ctx provider should be wrapped to use ctx");
  return ctx;
};

export const setAppState = (value: CtxProviderProps["value"]) => {
  const [appState, setAppState] = useCtx();
  setAppState({ ...appState, ...value });
};

const ctxProvider = ({ children, value }: CtxProviderProps): JSX.Element => {
  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
};

export default ctxProvider;
