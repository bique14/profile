import Icons from "../../../icons";
import AppStyle from "../app.style";

interface VSCodeDockProps {
  icon: string;
}

const VSCode = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <img alt="VSCode" src={Icons.VSCode} />
      </AppStyle.AppIcon>
      <AppStyle.AppName>VSCode</AppStyle.AppName>
    </>
  );
};

export const VSCodeDock = (props: VSCodeDockProps) => {
  const { icon } = props;

  return (
    <>
      <AppStyle.AppIcon>
        <a href="https://vscode.dev/" target="_blank" rel="noreferrer">
          <img alt="VSCode" src={icon} />
        </a>
      </AppStyle.AppIcon>
    </>
  );
};

export default VSCode;
