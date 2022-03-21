import React from "react";
import "./status-bar.css";

import Siri from "../../images/siri.webp";

const StatusBar = () => {
  return (
    <div className="status-bar">
      <div className="docker">
        <svg role="img" viewBox="0 0 24 24" width="18" height="18">
          <path
            d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137a15.74 15.74 0 0 0 2.93-.266 12.248 12.248 0 0 0 3.823-1.389 10.51 10.51 0 0 0 2.61-2.136c1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"
            fill="#fff"
          />
        </svg>
      </div>
      <div className="wifi">
        <svg
          enableBackground="new 0 0 294.414 294.414"
          version="1.1"
          viewBox="0 0 294.41 294.41"
          width="18"
          height="18"
        >
          <path
            d="m147.21 43.115c-55.607 0-107.89 21.656-147.21 60.977l16.971 16.971c34.787-34.788 81.04-53.947 130.24-53.947 49.197 0 95.449 19.159 130.24 53.947l16.971-16.971c-39.32-39.321-91.599-60.977-147.21-60.977z"
            fill="#fff"
          />
          <path
            d="m44.812 148.9 16.971 16.971c22.817-22.818 53.154-35.385 85.425-35.385 32.269 0 62.607 12.566 85.425 35.385l16.971-16.971c-27.351-27.351-63.715-42.414-102.4-42.414s-75.047 15.062-102.4 42.414z"
            fill="#fff"
          />
          <path
            d="m89.627 193.72 16.971 16.971c10.848-10.848 25.271-16.821 40.611-16.821 15.341 0 29.763 5.974 40.609 16.821l16.971-16.971c-15.38-15.38-35.829-23.851-57.58-23.851-21.752 0-42.201 8.471-57.582 23.851z"
            fill="#fff"
          />
          <circle cx="147.21" cy="237.3" r="14.001" fill="#fff" />
        </svg>
      </div>
      <div className="volume">
        <svg
          enableBackground="new 0 0 100 100"
          version="1.1"
          viewBox="0 0 100 100"
          width="18"
          height="18"
        >
          <path
            d="m73.684 23.396h-0.024c-0.117-1.031-0.983-1.837-2.047-1.837-0.378 0-0.726 0.108-1.031 0.285l-0.019-0.032-20.463 11.815v0.012l-7.74 4.469h-14.481v0.04c-0.013 0-0.024-4e-3 -0.037-4e-3 -0.842 0-1.525 0.684-1.525 1.525v20.66c0 0.842 0.684 1.524 1.525 1.524 0.013 0 0.024-3e-3 0.037-4e-3v0.041h14.481l11.524 6.653v-0.031l16.549 9.555c0.336 0.232 0.741 0.372 1.18 0.372 1.144 0 2.071-0.927 2.071-2.07 0-0.081-0.015-0.155-0.024-0.233h0.024v-52.74z"
            fill="#fff"
          />
        </svg>
      </div>
      <div className="battery">
        <span>50%</span>
        <svg width="24" height="24" viewBox="0 0 512 512">
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="256"
              y1="385.15"
              x2="256"
              y2="126.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>
          </defs>
          <path
            d="M256,335.05H51.52V176.94H256ZM477.85,220.46v-51.9a41.57,41.57,0,0,0-41.33-41.72H41.35A41.57,41.57,0,0,0,0,168.56V343.45a41.56,41.56,0,0,0,41.35,41.7H436.52a41.56,41.56,0,0,0,41.33-41.7v-51.9H512V220.46Zm-28.58,125.6a12.83,12.83,0,0,1-12.81,12.77H41.4a12.82,12.82,0,0,1-12.79-12.77V166A12.83,12.83,0,0,1,41.4,153.15H436.47A12.84,12.84,0,0,1,449.27,166Z"
            fill="url(#linear-gradient)"
          />
        </svg>
      </div>
      <span className="language">A</span>
      <span id="date">Date</span>
      <div className="magnify">
        <svg
          enableBackground="new 0 0 62.993 62.993"
          viewBox="0 0 62.993 62.993"
          width="14"
          height="14"
        >
          <path
            d="m62.58 60.594-21.267-21.265c3.712-4.18 5.988-9.66 5.988-15.677 0-13.042-10.609-23.651-23.65-23.651-13.042 0-23.651 10.609-23.651 23.651 0 13.041 10.609 23.65 23.651 23.65 6.016 0 11.497-2.276 15.677-5.988l21.265 21.267c0.273 0.273 0.634 0.411 0.993 0.411 0.36 0 0.721-0.138 0.994-0.411 0.55-0.551 0.55-1.438 0-1.987zm-38.929-16.102c-11.492 0-20.841-9.348-20.841-20.84s9.349-20.841 20.841-20.841c11.491 0 20.84 9.349 20.84 20.841 0 5.241-1.958 10.023-5.163 13.689-0.619 0.706-1.281 1.368-1.987 1.987-3.666 3.206-8.449 5.164-13.69 5.164z"
            fill="#fff"
            stroke="#fff"
          />
        </svg>
      </div>
      <div className="siri-container">
        <img id="siri" src={Siri} alt="siri-logo" />
      </div>
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
