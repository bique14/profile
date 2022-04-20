interface AppIconProps {
  children: JSX.Element;
}

const AppIcon = (props: AppIconProps) => (
  <div className="w-14 h-14">{props.children}</div>
);

interface AppNameProps {
  children: string;
}

const AppName = (props: AppNameProps) => (
  <span
    className="text-sm text-white overflow-hidden text-ellipsis w-full text-center"
    style={{ textShadow: "0px 0px 3px black" }}
  >
    {props.children}
  </span>
);

const AppStyle = {
  AppIcon,
  AppName,
};

export default AppStyle;
