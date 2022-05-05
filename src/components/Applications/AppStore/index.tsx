import Icons from "../../../icons";
import AppStyle from "../app.style";

const AppStore = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <img alt="appStore" src={Icons.AppStore} />
      </AppStyle.AppIcon>
      <AppStyle.AppName>AppStore</AppStyle.AppName>
    </>
  );
};

export const AppStoreDock = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <a
          href="https://www.apple.com/th/store"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="appStore" src={Icons.AppStore} />
        </a>
      </AppStyle.AppIcon>
    </>
  );
};

export default AppStore;
