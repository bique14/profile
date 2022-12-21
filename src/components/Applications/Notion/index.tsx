import Icons from "../../../icons";
import AppStyle from "../app.style";

interface NotionDockProps {
  icon: string;
}

const Notion = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <img alt="note" src={Icons.Notion} />
      </AppStyle.AppIcon>
      <AppStyle.AppName>Notion</AppStyle.AppName>
    </>
  );
};

export const NotionDock = (props: NotionDockProps) => {
  const { icon } = props;

  return (
    <>
      <AppStyle.AppIcon>
        <img alt="note" src={icon} />
      </AppStyle.AppIcon>
    </>
  );
};

export default Notion;
