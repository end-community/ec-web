import { getGeoQuery } from "@/__generated__/getGeoQuery";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { geoVar } from "~/apollo/var";
import { GET_GEO_GQL } from "~/lib";

export const Init = ({ children }) => {
  const { data } = useQuery<getGeoQuery>(GET_GEO_GQL);
  useEffect(() => {
    if (data) {
      geoVar(data.getGeo);
    }
  }, [data]);
  return children;
};
