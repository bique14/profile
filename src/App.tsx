import React, { useEffect, useState } from "react";

import Loading from "./components/Loading";
import Screen from "./components/Screen";
import MenuBar from "./components/MenuBar";
import Terminal from "./components/Terminal";
import Resume from "./components/Resume";
import Applications from "./components/Applications";
import Mobile from "./components/Mobile";

import useLoading from "./hooks/useLoading";
import useWindowDimensions from "./hooks/useWindowDimensions";

import "./App.css";
import Login from "./components/Login";

export type AppType = "resume" | "terminal";

const STATE = Object.freeze({
  LOADING: "LOADING",
  LOGIN: "LOGIN",
  SCREEN: "SCREEN",
});

const App: React.FC = () => {
  const { percent, isLoading } = useLoading();
  const { isDesktop } = useWindowDimensions();

  const [state, setState] = useState<string>(STATE.LOADING);
  const [appOpened, setAppOpened] = useState<AppType[]>([]);

  useEffect(() => console.log(state), [state]);

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
        default:
          return null;
      }
    });
  };

  useEffect(() => {
    if (!isLoading && state === STATE.LOADING) {
      setTimeout(() => setState(STATE.LOGIN), 400);
    }
  }, [isLoading]);

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

  return renderFromState(state);
};

export default App;
