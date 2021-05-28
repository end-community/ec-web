import React, { createContext, useContext } from "react";
import { AppCtxProviderProps } from "./context.d";

const AppCtx = createContext<AppCtxProviderProps["value"]>(null);

export const useAppCtx = () => {
  const ctx = useContext(AppCtx);
  if (!ctx) throw Error("ctx provider should be wrapped to use ctx");
  return ctx;
};

export const setAppState = (value: AppCtxProviderProps["value"]) => {
  const [appState, setAppState] = useAppCtx();
  setAppState({ ...appState, ...value });
};

const ctxProvider = ({ children, value }: AppCtxProviderProps): JSX.Element => {
  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
};

export default ctxProvider;
