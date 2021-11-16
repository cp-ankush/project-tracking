import React from "react";
import LeftPanel from './leftPanel'
import Projects from "./projects"

const App = () => {

  return (
    <div className="AppContainer">
      <LeftPanel />
      <Projects />
    </div>
  );
};

export default App;
