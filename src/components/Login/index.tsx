import { useState } from "react";

import Icons from "../../icons";
import wallpaper from "../../images/wallpaper.jpeg";
import Me from "../../images/me.jpeg";

import "./index.css";

interface LoginProps {
  onLogin: () => void;
}

const Login = (props: LoginProps) => {
  const { onLogin } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const _onLogin = () => {
    setIsLoading(true);
    onLogin();
  };

  return (
    <>
      <div
        className="bg-[rgba(255,255,255,0.6)] w-full h-full absolute"
        style={{
          background: `url(${wallpaper}) no-repeat`,
          backgroundSize: "cover",
          filter: "blur(5px)",
        }}
      ></div>
      <div className="relative h-full w-full flex flex-col justify-center items-center">
        <div className="bg-gray-400 rounded-full w-32 opacity-80">
          <img alt="profile" src={Me} className="rounded-full" />
        </div>
        <span className="mt-2 text-white opacity-80 cursor-default">
          Peerasorn Hemsart
        </span>
        {!isLoading && (
          <button
            className="mt-5 mb-7 rounded-full border border-gray-400 bg-gray-400 text-lg p-2 opacity-80"
            onClick={_onLogin}
          >
            <div className="w-4 -mr-[2px]">
              <Icons.ChevronRight />
            </div>
          </button>
        )}
        {isLoading && <Spinner />}
      </div>
    </>
  );
};

const Spinner = () => (
  <div className="lds-default">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Login;
