import Icons from "../../../icons";
import AppStyle from "../app.style";

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

export const TelegramDock = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <a href="https://web.telegram.org/" target="_blank" rel="noreferrer">
          <img alt="telegram" src={Icons.Telegram} />
        </a>
      </AppStyle.AppIcon>
    </>
  );
};

export default Telegram;
