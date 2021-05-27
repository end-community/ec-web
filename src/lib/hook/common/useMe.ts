import { meQuery } from "@/__generated__/meQuery";
import { useQuery } from "@apollo/client";
import { ME_GQL } from "~/lib/gql";

const useMe = (): meQuery | undefined => {
  const { data } = useQuery<meQuery>(ME_GQL);
  return data as meQuery | undefined;
};

export default useMe;
