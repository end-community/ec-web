import { UserProvider } from "@/__generated__/globalTypes";
import { Dispatch, SetStateAction } from "react";

interface OauthProfile {
  oauthId: string;
  email?: string;
  provider: UserProvider.GOOGLE | UserProvider.FACEBOOK;
}

export interface AppCtxProviderProps {
  children: ReactNode;
  value: [AppCtxValue, React.Dispatch<React.SetStateAction<AppCtxValue>>];
}

export interface AppCtxValue {
  gapiAuth: any;
  fbAuth: any;
  oauthProfile: OauthProfile;
}
