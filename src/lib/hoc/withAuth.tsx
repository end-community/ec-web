import React from "react";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "~var";

const withAuth = (Component: any) => {
  const Auth = (props) =>
    !useReactiveVar(userVar) ? <div>A</div> : <Component {...props} />;

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
