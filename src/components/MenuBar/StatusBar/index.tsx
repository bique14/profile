import React from "react";
import "./index.css";

import useDate from "../../../hooks/useDate";
import Siri from "../../../images/siri.webp";
import { Battery, Docker, Magnify, Wifi, Volume } from "../../../svg";

const StatusBar: React.FC = () => {
  const { date } = useDate();

  return (
    <div className="status-bar">
      <div className="docker">
        <Docker />
      </div>
      <div className="wifi">
        <Wifi />
      </div>
      <div className="volume">
        <Volume />
      </div>
      <div className="battery">
        <span>50%</span>
        <Battery />
      </div>
      <span className="language">A</span>
      <span id="date">{date}</span>
      <div className="magnify">
        <Magnify />
      </div>
      <div className="siri-container">
        <img id="siri" src={Siri} alt="siri-logo" />
      </div>
      <span>Peerasorn Hemsart</span>
      <div className="notification-bar">
        <div className="noti-row">
          <span></span>
          <span></span>
        </div>
        <div className="noti-row-odd">
          <span></span>
          <span></span>
        </div>
        <div className="noti-row">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
