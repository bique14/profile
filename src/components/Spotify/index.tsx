import type { AppType } from "../../types";
import useDrag from "../../hooks/useDrag";
import ApplicationHeaderControl from "../ApplicationHeaderControl";

const APP_SLUG = "spotify";

interface SpotifyProps {
  onClose: (appType: AppType) => void;
}

const Spotify = (props: SpotifyProps) => {
  const { onClose } = props;
  const { setRef, initialiseDrag } = useDrag();

  return (
    <div className="w-4/5 h-4/5 absolute top-10 left-40 z-20" ref={setRef}>
      <div
        className="flex px-2 h-5 bg-[rgb(18,18,18)]"
        style={{
          borderRadius: "4px 4px 0 0",
        }}
        onMouseDown={initialiseDrag}
      >
        <ApplicationHeaderControl appSlug={APP_SLUG} onClose={onClose} />
        <div className="flex-1 text-center text-white self-center text-sm cursor-default">
          Spotify
        </div>
      </div>

      <iframe
        className="w-full h-full"
        src="https://spotify-fake-lyric.netlify.app/"
        title="Spotify"
      />
    </div>
  );
};

export default Spotify;
