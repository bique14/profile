import type { AppType } from "../../types";
import useDrag from "../../hooks/useDrag";
import ApplicationHeaderControl from "../ApplicationHeaderControl";
import { useEffect, useState } from "react";

const APP_SLUG: AppType = "spotify";
const APP_NAME: string = "Spotify";

interface SpotifyProps {
  onClose: (appType: AppType) => void;
}

const Spotify = (props: SpotifyProps) => {
  const { onClose } = props;
  const { setRef, initialiseDrag } = useDrag();

  const [iframeLoaded, setIFrameLoaded] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.cursor = "wait";
  }, []);

  const handleIframeLoaded = () => {
    setIFrameLoaded(true);
    document.body.style.cursor = "auto";
  };

  return (
    <div className="w-4/5 h-4/5 absolute top-10 left-40 z-20" ref={setRef}>
      {iframeLoaded && (
        <div
          className="flex px-2 h-5 bg-[rgb(18,18,18)]"
          style={{
            borderRadius: "4px 4px 0 0",
          }}
          onMouseDown={initialiseDrag}
        >
          <ApplicationHeaderControl appSlug={APP_SLUG} onClose={onClose} />
          <div className="flex-1 text-center text-white self-center text-sm cursor-default">
            {APP_NAME}
          </div>
        </div>
      )}

      <iframe
        className="w-full h-full"
        // src="https://spotify-fake-lyric.netlify.app/"
        src="https://spotify-lu.netlify.app/"
        title="Spotify"
        onLoad={handleIframeLoaded}
      />
    </div>
  );
};

export default Spotify;
