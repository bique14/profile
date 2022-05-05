import Icons from "../../../icons";
import AppStyle from "../app.style";

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

export const SpotifyDock = () => {
  return (
    <>
      <AppStyle.AppIcon>
        <img alt="spotify" src={Icons.Spotify} />
      </AppStyle.AppIcon>
    </>
  );
};

export default Spotify;
