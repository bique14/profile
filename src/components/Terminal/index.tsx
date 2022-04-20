import type { AppType } from "../../App";

import Profile from "./Profile";
import profileData from "../../profile.json";
import useCommand from "../../hooks/useCommand";
import useDrag from "../../hooks/useDrag";

import "./index.css";

const DIRECTORY = "~/Peerasorn/Profile";
const APP_NAME = "terminal";

interface TerminalProps {
  onClose: (appType: AppType) => void;
}

const Terminal = (props: TerminalProps) => {
  const { onClose } = props;
  const { setRef, initialiseDrag } = useDrag();
  const { command, isEnd } = useCommand(200);

  return (
    <div className="terminal absolute z-10 top-1/4 left-1/4" ref={setRef}>
      <div className="terminal-header" onMouseDown={initialiseDrag}>
        <div
          className="terminal-red-button"
          onClick={() => onClose(APP_NAME)}
        ></div>
        <div className="terminal-yellow-button"></div>
        <div className="terminal-green-button"></div>
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
