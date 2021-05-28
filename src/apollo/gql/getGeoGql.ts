import { gql } from "@apollo/client";

const GET_GEO = gql`
  query getGeoQuery {
    getGeo {
      range
      country
      region
      eu
      timezone
      city
      ll
      metro
      area
    }
  }
`;

export default GET_GEO;
