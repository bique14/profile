import { useState } from "react";

import Icons from "../../icons";
import wallpaper from "../../images/wallpaper.jpeg";

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
        <div className="bg-gray-400 rounded-full p-8 opacity-80">
          <div className="w-10">
            <Icons.Apple />
          </div>
        </div>
        <span className="mt-2 text-white opacity-80">Peerasorn Hemsart</span>
        {!isLoading && (
          <button
            className="mt-5 mb-7 rounded-full border border-gray-400 bg-gray-400 text-lg w-8 p-2 opacity-80"
            onClick={_onLogin}
          >
            <Icons.ChevronRight />
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
