import React from "react";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "~/apollo";
import LogIn from "~/pages";

const withAuth = (Page: any) => {
  const Auth = (props) => {
    const user = useReactiveVar(userVar);
    if (!user) return <LogIn />;
    return <Page {...props} />;
  };
  // Copy getInitial props so it will run as well
  if (Page.getStaticProps) {
    Auth.getStaticProps = Page.getStaticProps;
  }
  if (Page.getServerSideProps) {
    Auth.getServerSideProps = Page.getServerSideProps;
  }

  return Auth;
};
export default withAuth;
