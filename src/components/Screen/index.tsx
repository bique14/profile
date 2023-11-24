type ScreenProps = {
  children: JSX.Element | JSX.Element[];
};

const Screen = (props: ScreenProps) => {
  const { children } = props;

  return <div className="relative h-full select-none">{children}</div>;
};

export default Screen;
