import Icons from "../../icons";

const Mobile = () => {
  return (
    <div className="h-full flex flex-col justify-center items-cente bg-gray-900">
      <div className="self-center">
        <Icons.Apple />
      </div>
      <span className="text-center text-white mt-4">
        for better experience
        <br />
        please open on the computer
      </span>
    </div>
  );
};

export default Mobile;
