import Icons from "../../../icons";

const Resume = () => {
  return (
    <>
      <div className="w-10 h-10">
        <Icons.PDF />
      </div>
      <span
        className="text-sm text-white overflow-hidden text-ellipsis w-full text-center"
        style={{ textShadow: "0px 0px 3px black" }}
      >
        Resume
      </span>
    </>
  );
};

export default Resume;
