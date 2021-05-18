import { useQuery, useReactiveVar } from "@apollo/client";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { hello } from "@/__generated__/hello";
import { HELLO_QUERY } from "~/gql/hello";
import withAuth from "~/lib/hoc/withAuth";

const FriendsPage: React.FC = () => {
  const { data, loading } = useQuery<hello>(HELLO_QUERY);
  if (loading) return <h1>loading...</h1>;
  return <div>{data.hello}</div>;
};

export default withAuth(FriendsPage);
