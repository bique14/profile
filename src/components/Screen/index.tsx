type ScreenProps = {
  children: JSX.Element;
};

const Screen = (props: ScreenProps) => {
  const { children } = props;

  return <div className="relative h-full">{children}</div>;
};

export default Screen;
