import type { AppType } from "../../App";

import useDrag from "../../hooks/useDrag";

const DIRECTORY = "~/Peerasorn/Profile";
const APP_NAME = "resume";

interface ResumeProps {
  onClose: (appType: AppType) => void;
}

const Resume = (props: ResumeProps) => {
  const { onClose } = props;
  const { setRef, initialiseDrag } = useDrag();

  return (
    <div className="terminal absolute z-10" ref={setRef}>
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
        </div>
        <div>PDF VIEWER</div>
      </div>
    </div>
  );
};

export default Resume;
