import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Routes from "./RoutesNew";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-174561068-1");
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
