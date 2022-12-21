import Icons from "../../../icons";
import AppStyle from "../app.style";

interface ChromeDockProps {
  icon: string;
}

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

export const ChromeDock = (props: ChromeDockProps) => {
  const { icon } = props;

  return (
    <>
      <AppStyle.AppIcon>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <img alt="chrome" src={icon} />
        </a>
      </AppStyle.AppIcon>
    </>
  );
};

export default Chrome;
