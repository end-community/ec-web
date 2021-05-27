import { ApolloError } from "@apollo/client";
interface GetErrRes {
  loc: string;
  errType: string;
  errCode: string;
  errMsg: string;
}
const getErrRes = (err: ApolloError): GetErrRes => {
  const { loc, msg } = err.graphQLErrors[0].extensions.exception.response as {
    loc: string;
    msg: string;
  };
  const [errType, errCode, errMsg] = msg.split("/");
  return { loc, errType, errCode, errMsg };
};

export default getErrRes;
