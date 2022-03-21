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
      <div>Peerasorn hemsart</div>
    </div>
  );
};

export default Terminal;
