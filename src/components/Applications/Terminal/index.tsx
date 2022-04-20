import Icons from "../../../icons";

const Terminal = () => {
  return (
    <>
      <div className="w-10 h-10">
        <Icons.Terminal />
      </div>
      <span
        className="text-sm text-white overflow-hidden text-ellipsis w-full text-center"
        style={{ textShadow: "0px 0px 3px black" }}
      >
        iTerm2
      </span>
    </>
  );
};

export default Terminal;
