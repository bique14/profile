import type { AppType } from "../../App";
import Dock from "../Dock";

import Resume, { ResumeDock } from "./Resume";
import Terminal, { TerminalDock } from "./Terminal";
import Spotify, { SpotifyDock } from "./Spotify";
import { NoteDock } from "./Note";

import "./index.css";

interface ApplicationsProps {
  onOpen: (appType: AppType) => void;
}

const ApplicationsType = Object.freeze({
  resume: "resume" as const,
  terminal: "terminal" as const,
  spotify: "spotify" as const,
});

const Applications = (props: ApplicationsProps) => {
  const { onOpen } = props;

  return (
    <div
      className="w-full h-full relative grid p-4"
      // style={{
      //   gridTemplateColumns: "repeat(14, minmax(0, 1fr))",
      //   gridTemplateRows: "repeat(8, minmax(0, 1fr))",
      // }}
    >
      <AppWrapper
        classes="right-4 top-4"
        onOpen={() => onOpen(ApplicationsType.resume)}
      >
        <Resume />
      </AppWrapper>
      <AppWrapper
        classes="right-24 top-4"
        onOpen={() => onOpen(ApplicationsType.terminal)}
      >
        <Terminal />
      </AppWrapper>

      <Dock>
        <DockWrapper
          appName="Resume"
          onOpen={() => onOpen(ApplicationsType.resume)}
        >
          <ResumeDock />
        </DockWrapper>
        <DockWrapper
          appName="Terminal"
          onOpen={() => onOpen(ApplicationsType.terminal)}
        >
          <TerminalDock />
        </DockWrapper>
        <DockWrapper
          appName="Spotify"
          onOpen={() => onOpen(ApplicationsType.spotify)}
        >
          <SpotifyDock />
        </DockWrapper>
        <DockWrapper
          appName="Note"
          onOpen={() => {
            /** COMING SOON */
          }}
        >
          <NoteDock />
        </DockWrapper>
      </Dock>
    </div>
  );
};

interface AppWrapperProps {
  classes?: string;
  onOpen: () => void;
  children: JSX.Element;
}

const AppWrapper = (props: AppWrapperProps) => {
  const { classes, onOpen, children } = props;

  return (
    <div
      // className={`w-20 h-24 absolute flex flex-col justify-center items-center cursor-pointer bg-red-200 ${classes}`}
      className={`absolute flex flex-col justify-center items-center cursor-pointer ${classes}`}
      onDoubleClick={onOpen}
    >
      {children}
    </div>
  );
};

interface DockWrapperProps {
  appName: string;
  onOpen: () => void;
  children: JSX.Element;
}

const DockWrapper = (props: DockWrapperProps) => {
  const { appName, onOpen, children } = props;

  return (
    <div className="relative">
      <div className="dock-app" onClick={onOpen}>
        {children}
      </div>

      <span
        className="dock-app-name"
        style={{ transform: "translate(-50%, 0)" }}
      >
        {appName}
      </span>
    </div>
  );
};

export default Applications;
