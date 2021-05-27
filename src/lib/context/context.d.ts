import { UserProvider } from "@/__generated__/globalTypes";
import { Dispatch, SetStateAction } from "react";

interface OauthProfile {
  oauthId: string;
  email?: string;
  provider: UserProvider.GOOGLE | UserProvider.FACEBOOK;
}

export interface CtxProviderProps {
  children: ReactNode;
  value: [CtxValue, React.Dispatch<React.SetStateAction<CtxValue>>];
}

export interface CtxValue {
  gapiAuth: any;
  fbAuth: any;
  oauthProfile: OauthProfile;
}
