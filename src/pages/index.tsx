// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const HomePage: React.FC = () => {
  return <div>HomePage</div>;
};

// export async function getStaticProps({ locale }) {
//   return {
//     props: { ...(await serverSideTranslations(locale, ["common"])) },
//   };
// }
export default HomePage;
