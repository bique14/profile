import Icons from "../../../icons";
import AppStyle from "../app.style";

interface FinderDockProps {
  icon: string;
}

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

export const FinderDock = (props: FinderDockProps) => {
  const { icon } = props;

  return (
    <>
      <AppStyle.AppIcon>
        <img alt="Finder" src={icon} />
      </AppStyle.AppIcon>
    </>
  );
};

export default Finder;
