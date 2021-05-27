/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getGeoQuery
// ====================================================

export interface getGeoQuery_getGeo {
  __typename: "GetGeoOutput";
  range: number[];
  country: string;
  region: string;
  eu: string;
  timezone: string;
  city: string;
  ll: number[];
  metro: number;
  area: number;
}

export interface getGeoQuery {
  getGeo: getGeoQuery_getGeo;
}
