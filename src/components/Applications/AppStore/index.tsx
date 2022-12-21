import Icons from "../../../icons";
import AppStyle from "../app.style";

interface AppStoreDockProps {
  icon: string;
}

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

export const AppStoreDock = (props: AppStoreDockProps) => {
  const { icon } = props;

  return (
    <>
      <AppStyle.AppIcon>
        <a
          href="https://www.apple.com/th/store"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="appStore" src={icon} />
        </a>
      </AppStyle.AppIcon>
    </>
  );
};

export default AppStore;
