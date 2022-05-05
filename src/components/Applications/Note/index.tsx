import Icons from "../../../icons";
import AppStyle from "../app.style";

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

export const NoteDock = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <img alt="note" src={Icons.Note} />
      </AppStyle.AppIcon>
    </>
  );
};

export default Note;
