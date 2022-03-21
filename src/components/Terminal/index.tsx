import React from "react";
import "./index.css";

import profile from "../../profile.json";
console.log(profile);

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
          <span className="terminal-command">node profile.js</span>
        </div>
        <div className="terminal-output">
          <h1 className="name-text">{profile.name}</h1>
          <h3 className="role-text">{profile.role}</h3>
          <div className="stack-container">
            {profile.stacks.map((stack, i) => (
              <span className="stack-text">
                {stack}
                {i !== profile.stacks.length - 1 && ","}
              </span>
            ))}
          </div>
          <hr />
          <div className="tools-container">
            {profile.tools.map((tool, i) => (
              <span className="tool-text">
                {tool}
                {i !== profile.tools.length - 1 && ","}
              </span>
            ))}
          </div>
          <a href="https://github.com/bique14" className="github">
            https://github.com/bique14
          </a>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
