import React from "react";

import Screen from "./components/Screen";
import Application from "./components/Application";
import MenuBar from "./components/MenuBar";
import Terminal from "./components/Terminal";

import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <MenuBar />
      <Screen>
        <Application>
          <Terminal />
        </Application>
      </Screen>
    </>
  );
};

export default App;
