import React from "react";
import "./index.css";

const Terminal: React.FC = () => {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-red-button"></div>
        <div className="terminal-yellow-button"></div>
        <div className="terminal-green-button"></div>
      </div>
      <div className="terminal-body">
        <div className="terminal-prompt">
          <span className="terminal-prompt-text">~/Peerasorn/Profile</span>
          <div className="triangle-prompt"></div>
          <span className="terminal-command">cat ./profile</span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
