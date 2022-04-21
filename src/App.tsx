import React, { useState } from "react";

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

export type AppType = "resume" | "terminal";

const App: React.FC = () => {
  const { percent, isLoading } = useLoading();
  const { isDesktop } = useWindowDimensions();

  const [appOpened, setAppOpened] = useState<AppType[]>([]);

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

  return (
    <>
      {isDesktop && (
        <>
          {isLoading && <Loading percent={percent} />}
          {!isLoading && (
            <>
              <MenuBar />
              <Screen>
                <>{renderAppOpened()}</>

                <Applications onOpen={onOpen} />
              </Screen>
            </>
          )}
        </>
      )}
      {!isDesktop && <Mobile />}
    </>
  );
};

export default App;
