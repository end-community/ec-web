import { meQuery } from "@/__generated__/meQuery";
import { useQuery, useReactiveVar } from "@apollo/client";
import { isLoggedInVar, ME } from "~/apollo";

const useMe = () => {
  const { data } = useQuery<meQuery>(ME);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return !isLoggedIn ? undefined : data;
};

export default useMe;
