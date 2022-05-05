import Icons from "../../../icons";
import AppStyle from "../app.style";

const Chrome = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <img alt="chrome" src={Icons.Chrome} />
      </AppStyle.AppIcon>
      <AppStyle.AppName>Chrome</AppStyle.AppName>
    </>
  );
};

export const ChromeDock = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <img alt="chrome" src={Icons.Chrome} />
        </a>
      </AppStyle.AppIcon>
    </>
  );
};

export default Chrome;
