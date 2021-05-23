import { useRouter } from "next/dist/client/router";
import { SubmitHandler } from "react-hook-form";
import { LogInFormData } from "~/lib/validation";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";

const useLogIn = () => {
  const { push } = useRouter();
  const onRegisterClick = () => push("/register");
  const onFormSubmit: SubmitHandler<LogInFormData> = (data) => {
    console.log(data);
  };
  const buttonList = [
    {
      children: (
        <>
          <FcGoogle className="absolute left-0 text-2xl" />
          구글로 로그인
        </>
      ),
      color: "white",
      onClick: onRegisterClick,
    },
    {
      children: (
        <>
          <FaFacebookSquare className="absolute left-0 text-2xl text-blue-800" />
          페이스북으로 로그인
        </>
      ),
      color: "white",
      onClick: onRegisterClick,
    },
    {
      children: (
        <>
          <RiKakaoTalkFill className="absolute left-0 text-2xl text-yellow-400" />
          카카오로 로그인
        </>
      ),
      color: "white",
      onClick: onRegisterClick,
    },
    { children: "회원가입", color: "green", onClick: onRegisterClick },
  ] as const;
  return { buttonList, onFormSubmit };
};

export default useLogIn;
