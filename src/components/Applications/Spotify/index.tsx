import Icons from "../../../icons";
import AppStyle from "../app.style";

interface SpotifyDockProps {
  icon: string;
}

const Spotify = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <img alt="spotify" src={Icons.Spotify} />
      </AppStyle.AppIcon>
      <AppStyle.AppName>Spotify</AppStyle.AppName>
    </>
  );
};

export const SpotifyDock = (props: SpotifyDockProps) => {
  const { icon } = props;

  return (
    <>
      <AppStyle.AppIcon>
        <img alt="spotify" src={icon} />
      </AppStyle.AppIcon>
    </>
  );
};

export default Spotify;
