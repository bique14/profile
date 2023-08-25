import type { AppType } from "./types";

import React, { useEffect, useState, lazy, Suspense } from "react";

import Loading from "./components/Loading";
import Screen from "./components/Screen";
import MenuBar from "./components/MenuBar";
import Terminal from "./components/Terminal";
import Resume from "./components/Resume";
// import Applications from "./components/Applications";
import Mobile from "./components/Mobile";
import Login from "./components/Login";
import Spotify from "./components/Spotify";
import Notion from "./components/Notion";

import useLoading from "./hooks/useLoading";
import useWindowDimensions from "./hooks/useWindowDimensions";

import Spinner from "./components/Spinner";
import useCached from "./hooks/useCached";
import "./App.css";

const Applications = lazy(() => import("./components/Applications"));

enum STATE {
  LOADING = "LOADING",
  LOGIN = "LOGIN",
  SCREEN = "SCREEN",
}

const App: React.FC = () => {
  useCached();
  const { percent, isLoading } = useLoading();
  const { isDesktop } = useWindowDimensions();

  const [state, setState] = useState<STATE>(STATE.SCREEN);
  const [appOpened, setAppOpened] = useState<AppType[]>([]);

  useEffect(() => {
    if (!isLoading && state === STATE.LOADING) {
      setTimeout(() => setState(STATE.LOGIN), 400);
    }
  }, [isLoading, state]);

  const onLogin = () => {
    if (isDesktop) document.documentElement.requestFullscreen();
    setTimeout(() => {
      setState(STATE.SCREEN);
    }, 1000);
  };

  const onOpen = (appType: AppType) => {
    const updatedOpenApp: AppType[] = appOpened.includes(appType)
      ? [...appOpened]
      : [...appOpened, appType];
    setAppOpened(updatedOpenApp);
  };

  const onClose = (appType: AppType) => {
    const updatedOpenApp: AppType[] = appOpened.filter(
      (app) => app !== appType
    );
    setAppOpened(updatedOpenApp);
  };

  window.onclick = (e: any) => {
    const target = e.target.offsetParent;
    const screen = target.parentNode;
    const allAppOpened = [...screen.childNodes].slice(0, -1);

    console.log("targe", e.target.offsetParent); // to get the element
    console.log("screen", screen.childNodes);

    allAppOpened.forEach((app) => {
      if (app === target) {
        app.style.zIndex = 20;
      } else {
        app.style.zIndex = 10;
      }
    });
  };

  const renderAppOpened = () => {
    if (appOpened.length === 0) {
      return null;
    }

    return appOpened.map((appType) => {
      switch (appType) {
        case "resume":
          return <Resume key={appType} onClose={onClose} />;
        case "terminal":
          return <Terminal key={appType} onClose={onClose} />;
        case "spotify":
          return <Spotify key={appType} onClose={onClose} />;
        case "notion":
          return <Notion key={appType} onClose={onClose} />;
        default:
          return null;
      }
    });
  };

  const renderFromState = (state: string) => {
    switch (state) {
      case STATE.LOADING:
        return <Loading percent={percent} />;
      case STATE.LOGIN:
        return <Login onLogin={onLogin} />;
      case STATE.SCREEN:
        return (
          <>
            {isDesktop && (
              <>
                <MenuBar />
                <Screen>
                  <>{renderAppOpened()}</>
                  <Applications onOpen={onOpen} />
                </Screen>
              </>
            )}
            {!isDesktop && <Mobile />}
          </>
        );
      default:
        return null;
    }
  };

  return <Suspense fallback={<Spinner />}>{renderFromState(state)}</Suspense>;
};

export default App;
