import React from "react";

import Screen from "./components/Screen";
import MenuBar from "./components/MenuBar";
import Terminal from "./components/Terminal";

import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <MenuBar />
      <Screen>
        <Terminal />
      </Screen>
    </>
  );
};

export default App;
