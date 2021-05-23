// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useReactiveVar } from "@apollo/client";
import React from "react";
import { userVar } from "~/apollo/var";
// import { useQuery, useReactiveVar } from "@apollo/client";
// import { hello } from "@/__generated__/hello";
// import { HELLO_QUERY } from "~/lib/gql/hello";
// import { userVar } from "~/apollo/var";

const HomePage: React.FC = () => {
  // const { data, loading, error } = useQuery<hello>(HELLO_QUERY);
  // if (loading) return <h1>loading...</h1>;
  // if (error) {
  //   console.error(error);
  //   return <h1>error</h1>;
  // }
  const user = useReactiveVar(userVar);
  return <div>HomePage</div>;
};

// export async function getStaticProps({ locale }) {
//   return {
//     props: { ...(await serverSideTranslations(locale, ["common"])) },
//   };
// }
export default HomePage;
