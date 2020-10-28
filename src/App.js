import React from "react";
import Routes from "./router/Routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
