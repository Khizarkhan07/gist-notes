import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { GistsProvider } from "./contexts/GistContext";

ReactDOM.render(
  <UserProvider>
    <GistsProvider>
      <App />
    </GistsProvider>
  </UserProvider>,

  document.getElementById("root")
);
