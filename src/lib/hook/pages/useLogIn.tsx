import { useRouter } from "next/dist/client/router";
import { SubmitHandler } from "react-hook-form";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { LogInFormData } from "~/lib/validation";
import { useGoogleLogIn, useFacebookLogIn } from "../common";

const useLogIn = () => {
  const { onGoogleClick } = useGoogleLogIn();
  const { onFacebookClick } = useFacebookLogIn();
  const { push } = useRouter();
  const onRegisterClick = () => push("/register");
  const onFormSubmit: SubmitHandler<LogInFormData> = (data) => {
    console.log(data);
  };
  const buttonList = [
    {
      children: (
        <>
          <AiOutlineGoogle className="absolute left-0 text-2xl" />
          구글로 로그인
        </>
      ),
      color: "red",
      onClick: onGoogleClick,
    },
    {
      children: (
        <>
          <FaFacebookSquare className="absolute left-0 text-2xl" />
          페이스북으로 로그인
        </>
      ),
      color: "blue",
      onClick: onFacebookClick,
    },
    { children: "회원가입", color: "green", onClick: onRegisterClick },
  ] as const;
  return { buttonList, onFormSubmit };
};

export default useLogIn;
