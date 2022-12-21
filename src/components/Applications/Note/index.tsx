import Icons from "../../../icons";
import AppStyle from "../app.style";

interface NoteDockProps {
  icon: string;
}

const Note = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <img alt="note" src={Icons.Note} />
      </AppStyle.AppIcon>
      <AppStyle.AppName>Note</AppStyle.AppName>
    </>
  );
};

export const NoteDock = (props: NoteDockProps) => {
  const { icon } = props;

  return (
    <>
      <AppStyle.AppIcon>
        <img alt="note" src={icon} />
      </AppStyle.AppIcon>
    </>
  );
};

export default Note;
