import React from "react";

import Screen from "./components/Screen";
import MenuBar from "./components/MenuBar";
import Terminal from "./components/Terminal";
import Applications from "./components/Applications";
import Mobile from "./components/Mobile";

import useWindowDimensions from "./hooks/useWindowDimensions";

import "./App.css";

const App: React.FC = () => {
  const { isDesktop } = useWindowDimensions();

  return (
    <>
      {isDesktop && (
        <>
          <MenuBar />
          <Screen>
            <Terminal />

            <Applications />
          </Screen>
        </>
      )}
      {!isDesktop && <Mobile />}
    </>
  );
};

export default App;
