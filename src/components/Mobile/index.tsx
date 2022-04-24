import Terminal from "../Terminal";
import Icons from "../../icons";

const Mobile = () => {
  return (
    <>
      <div className="fade-out w-full h-full flex flex-col justify-center items-center bg-gray-900 absolute z-20">
        <div className="w-20 self-center">
          <Icons.Apple />
        </div>
        <span className="text-center text-white mt-4">
          You can still read my resume
          <br />
          but for better experience
          <br />
          please open on the computer
        </span>
      </div>
      <Terminal onClose={() => {}} />
    </>
  );
};

export default Mobile;
