const Spinner = () => {
  return (
    <div
      className="absolute top-1/2 left-1/2 z-20 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.4)]"
      style={{ transform: "translate(-50%,-50%)" }}
    >
      <div className="loader w-10" />
    </div>
  );
};

export default Spinner;
