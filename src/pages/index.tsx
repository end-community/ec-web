import { useQuery } from "@apollo/client";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { hello } from "@/__generated__/hello";
import { HELLO_QUERY } from "~/gql/hello";

const Home: React.FC = () => {
  const { data, loading } = useQuery<hello>(HELLO_QUERY);
  if (loading) return <h1>loading...</h1>;
  return <div>{data.hello}</div>;
};

// export async function getStaticProps({ locale }) {
//   return {
//     props: { ...(await serverSideTranslations(locale, ["common"])) },
//   };
// }

export default Home;
