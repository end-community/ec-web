import { makeVar, TypePolicy } from "@apollo/client";

export interface GeoVar {
  country: string;
}

export const geoVar = makeVar<null | GeoVar>(null);

export default {
  read() {
    return geoVar();
  },
} as TypePolicy["fields"];
