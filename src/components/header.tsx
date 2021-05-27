import { useRouter } from "next/router";
import React from "react";
import { isLoggedInVar } from "~/apollo/var";
import { Button, Logo } from "~/components";
import useMe from "~/lib/hook/common/useMe";

export const Header: React.FC = React.memo(() => {
  const { push } = useRouter();
  const data = useMe();
  const onLogOutClick = () => {
    localStorage.removeItem("ect");
    isLoggedInVar(false);
  };
  const onLogInClick = () => {
    push("/register");
  };
  return (
    <div className="p-2 shadow border-b border-gray-200">
      <div className="w-full max-w-4xl m-auto flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className="flex items-center">
          {data?.me ? (
            <>
              <p className="mr-2">{data.me.nickname}</p>
              <Button color="black" padding="sm" onClick={onLogOutClick}>
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Button color="black" padding="sm" onClick={() => push("/login")}>
                로그인
              </Button>
              <Button
                className="ml-1"
                color="black"
                padding="sm"
                onClick={onLogInClick}
              >
                회원가입
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
});
