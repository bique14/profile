import Icons from "../../../icons";
import AppStyle from "../app.style";

const Terminal = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <Icons.Terminal />
      </AppStyle.AppIcon>
      <AppStyle.AppName>iTerm2</AppStyle.AppName>
    </>
  );
};

export const TerminalDock = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <Icons.Terminal />
      </AppStyle.AppIcon>
    </>
  );
};

export default Terminal;
