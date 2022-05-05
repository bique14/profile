import Icons from "../../../icons";
import AppStyle from "../app.style";

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

export const VSCodeDock = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <a href="https://vscode.dev/" target="_blank" rel="noreferrer">
          <img alt="VSCode" src={Icons.VSCode} />
        </a>
      </AppStyle.AppIcon>
    </>
  );
};

export default VSCode;
