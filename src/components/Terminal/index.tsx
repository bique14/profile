import type { AppType } from "../../App";

import Profile from "./Profile";
import profileData from "../../profile.json";
import useCommand from "../../hooks/useCommand";
import useDrag from "../../hooks/useDrag";
import ApplicationHeaderControl from "../ApplicationHeaderControl";

import "./index.css";

const DIRECTORY = "~/Peerasorn/Profile";
const APP_SLUG = "terminal";

interface TerminalProps {
  onClose: (appType: AppType) => void;
}

const Terminal = (props: TerminalProps) => {
  const { onClose } = props;
  const { setRef, initialiseDrag } = useDrag();
  const { command, isEnd } = useCommand(200);

  return (
    <div className="terminal absolute z-10 top-[20%] left-[40%]" ref={setRef}>
      <div
        className="flex px-2 h-5"
        style={{
          background: "rgb(40, 44, 52)",
          borderRadius: "4px 4px 0 0",
        }}
        onMouseDown={initialiseDrag}
      >
        <ApplicationHeaderControl appSlug={APP_SLUG} onClose={onClose} />
      </div>
      <div className="terminal-body">
        <div className="terminal-prompt">
          <span className="terminal-directory-text">{DIRECTORY}</span>
          <div className="triangle-prompt"></div>
          <span className="terminal-command typewriter">{command}</span>
        </div>
        <div
          className="terminal-output"
          style={{ visibility: isEnd ? "visible" : "hidden" }}
        >
          <Profile profile={profileData} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
