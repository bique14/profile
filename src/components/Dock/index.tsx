type DockProps = {
  children: JSX.Element | JSX.Element[];
};

const Dock = (props: DockProps) => {
  const { children } = props;

  return (
    <div
      className="bg-[rgba(98,98,98,0.7)] absolute bottom-0 left-1/2 p-3 rounded-t flex gap-5"
      style={{ transform: "translate(-50%,0%)" }}
    >
      {children}
    </div>
  );
};

export default Dock;
