import { useEffect } from "react";
import { coinConfig } from "./config/coinConfig";
import "./App.css";
import { NavBar } from "./components/NavBar";

function App() {
  useEffect(() => {
    const theme = coinConfig.theme;
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return <NavBar />;
}

export default App;
