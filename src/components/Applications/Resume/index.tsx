import Icons from "../../../icons";
import AppStyle from "../app.style";

const Resume = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <Icons.PDF />
      </AppStyle.AppIcon>
      <AppStyle.AppName>My Resume</AppStyle.AppName>
    </>
  );
};

export const ResumeDock = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <Icons.PDF />
      </AppStyle.AppIcon>
    </>
  );
};

export default Resume;
