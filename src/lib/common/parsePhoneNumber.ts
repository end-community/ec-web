import { getGeoQuery_getGeo } from "@/__generated__/getGeoQuery";
import libphonenumber from "libphonenumber-js";

const parsePhoneNumber = (
  phoneNumber: string,
  country: getGeoQuery_getGeo["country"],
): string => {
  return libphonenumber(phoneNumber, country as any).number as string;
};

export default parsePhoneNumber;
