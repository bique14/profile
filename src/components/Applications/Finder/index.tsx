import Icons from "../../../icons";
import AppStyle from "../app.style";

const Finder = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <img alt="Finder" src={Icons.Finder} />
      </AppStyle.AppIcon>
      <AppStyle.AppName>Finder</AppStyle.AppName>
    </>
  );
};

export const FinderDock = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <img alt="Finder" src={Icons.Finder} />
      </AppStyle.AppIcon>
    </>
  );
};

export default Finder;
