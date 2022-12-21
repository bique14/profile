import Icons from "../../../icons";
import AppStyle from "../app.style";

interface TelegramDockProps {
  icon: string;
}

const Telegram = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <img alt="telegram" src={Icons.Telegram} />
      </AppStyle.AppIcon>
      <AppStyle.AppName>Telegram</AppStyle.AppName>
    </>
  );
};

export const TelegramDock = (props: TelegramDockProps) => {
  const { icon } = props;

  return (
    <>
      <AppStyle.AppIcon>
        <a href="https://web.telegram.org/" target="_blank" rel="noreferrer">
          <img alt="telegram" src={icon} />
        </a>
      </AppStyle.AppIcon>
    </>
  );
};

export default Telegram;
