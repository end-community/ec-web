import { getGeoQuery_getGeo } from "@/__generated__/getGeoQuery";
import { makeVar, TypePolicy } from "@apollo/client";

export const geoVar = makeVar<null | getGeoQuery_getGeo>(null);

export default {
  read() {
    return geoVar();
  },
} as TypePolicy["fields"];
