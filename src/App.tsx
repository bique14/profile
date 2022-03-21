import React from "react";
import "./App.css";
import MenuBar from "./components/MenuBar";
import Terminal from "./components/Terminal";

const App: React.FC = () => {
  return (
    <>
      <MenuBar />
      <Terminal />
    </>
  );
};

export default App;
