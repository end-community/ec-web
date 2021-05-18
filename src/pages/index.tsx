import { useQuery, useReactiveVar } from "@apollo/client";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { hello } from "@/__generated__/hello";
import { HELLO_QUERY } from "~/gql/hello";

const HomePage: React.FC = () => {
  // const { data, loading } = useQuery<hello>(HELLO_QUERY);
  return <div>HomePage</div>;
};

// export async function getStaticProps({ locale }) {
//   return {
//     props: { ...(await serverSideTranslations(locale, ["common"])) },
//   };
// }
export default HomePage;
