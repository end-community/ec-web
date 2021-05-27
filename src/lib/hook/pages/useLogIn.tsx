import { useGoogleLogIn, useFacebookLogIn } from "~/lib";

const useLogIn = () => {
  const useGoogle = useGoogleLogIn();
  const useFB = useFacebookLogIn();
  return { ...useGoogle, ...useFB };
};

export default useLogIn;
