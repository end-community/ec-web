import { meQuery } from "@/__generated__/meQuery";
import { useQuery, useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "~/apollo/var";
import { ME_GQL } from "~/lib/gql";

const useMe = () => {
  const { data } = useQuery<meQuery>(ME_GQL);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return !isLoggedIn ? undefined : data;
};

export default useMe;
