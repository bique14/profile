import "./index.css";

import Profile from "./Profile";

import profile from "../../profile.json";
import useCommand from "../../hooks/useCommand";
import useDrag from "../../hooks/useDrag";

const DIRECTORY = "~/Peerasorn/Profile";

const Terminal = () => {
  const { setRef, initialiseDrag } = useDrag();
  const { command, isEnd } = useCommand(200);

  return (
    <div className="terminal absolute" ref={setRef}>
      <div className="terminal-header" onMouseDown={initialiseDrag}>
        <div className="terminal-red-button"></div>
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
          <Profile profile={profile} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
