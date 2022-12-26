type CodeProps = {
  children: JSX.Element | JSX.Element[];
};
const Code = (props: CodeProps) => {
  const { children } = props;

  return (
    <div className="bg-[rgb(40,40,40)] rounded px-7 py-5 my-2">{children}</div>
  );
};

export default Code;
