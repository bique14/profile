import type { AppType } from "../../types";
import { useEffect, useState } from "react";

import Dock from "../Dock";

import Resume, { ResumeDock } from "./Resume";
import Terminal, { TerminalDock } from "./Terminal";
import Spotify, { SpotifyDock } from "./Spotify";
import { NoteDock } from "./Note";

import { ChromeDock } from "./Chrome";
import { TelegramDock } from "./Telegram";
import { AppStoreDock } from "./AppStore";
import { VSCodeDock } from "./VSCode";
import { FinderDock } from "./Finder";

import { getCache } from "../../hooks/useCached";

import "./index.css";
import Icons from "../../icons";
import { NotionDock } from "./Notion";

interface ApplicationsProps {
  onOpen: (appType: AppType) => void;
}

const ApplicationsType = Object.freeze({
  resume: "resume" as const,
  terminal: "terminal" as const,
  spotify: "spotify" as const,
  notion: "notion" as const,
});

const Applications = (props: ApplicationsProps) => {
  const { onOpen } = props;
  const [appIcons, setAppIcons] = useState<any>({});

  useEffect(() => {
    const loadCache = async () => {
      const cacheList = {
        appStore: await getCache(Icons.AppStore),
        chrome: await getCache(Icons.Chrome),
        finder: await getCache(Icons.Finder),
        note: await getCache(Icons.Note),
        notion: await getCache(Icons.Notion),
        spotify: await getCache(Icons.Spotify),
        telegram: await getCache(Icons.Telegram),
        vscode: await getCache(Icons.VSCode),
      };

      setAppIcons(cacheList);
    };

    loadCache();
  }, []);

  const dockApps = [
    {
      name: "Finder",
      type: null,
      component: <FinderDock icon={appIcons.finder} />,
    },
    {
      name: "AppStore",
      type: null,
      component: <AppStoreDock icon={appIcons.appStore} />,
    },
    {
      name: "Chrome",
      type: null,
      component: <ChromeDock icon={appIcons.chrome} />,
    },
    {
      name: "Note",
      type: null,
      component: <NoteDock icon={appIcons.note} />,
    },
    {
      name: "Notion",
      type: ApplicationsType.notion,
      component: <NotionDock icon={appIcons.notion} />,
    },
    {
      name: "Spotify",
      type: ApplicationsType.spotify,
      component: <SpotifyDock icon={appIcons.spotify} />,
    },
    {
      name: "Telegram",
      type: null,
      component: <TelegramDock icon={appIcons.telegram} />,
    },
    {
      name: "Terminal",
      type: ApplicationsType.terminal,
      component: <TerminalDock />,
    },
    {
      name: "VSCode",
      type: null,
      component: <VSCodeDock icon={appIcons.vscode} />,
    },
    {
      name: "Resume",
      type: ApplicationsType.resume,
      component: <ResumeDock />,
    },
  ];

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
        {dockApps.map((app) => (
          <DockWrapper
            key={app.name}
            appName={app.name}
            onOpen={() => (app.type ? onOpen(app.type) : {})}
          >
            {app.component}
          </DockWrapper>
        ))}
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
