import React from "react";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "~var";
import { LogIn } from "~/components";
import { useRouter, withRouter } from "next/router";

const withAuth = (Component: any) => {
  const Auth = (props) => {
    const user = useReactiveVar(userVar);
    const { replace, pathname } = useRouter();

    return <Component {...props} />;
  };
  // Copy getInitial props so it will run as well
  if (Component.getStaticProps) {
    Auth.getStaticProps = Component.getStaticProps;
  }
  if (Component.getServerSideProps) {
    Auth.getServerSideProps = Component.getServerSideProps;
  }

  return Auth;
};

export default withAuth;
