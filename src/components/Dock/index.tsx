type DockProps = {
  children: JSX.Element | JSX.Element[];
};

const Dock = (props: DockProps) => {
  const { children } = props;

  return (
    <div
      className="bg-[rgba(98,98,98,0.7)] absolute z-30 bottom-0 left-1/2 rounded-t flex"
      style={{ transform: "translate(-50%,0%)" }}
    >
      {children}
    </div>
  );
};

export default Dock;
