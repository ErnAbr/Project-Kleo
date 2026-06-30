import { useEffect } from "react";
import { coinData } from "./config/coinConfig";
import "./App.css";
import { NavBar } from "./components/NavBar";

function App() {
  useEffect(() => {
    const theme = coinData.theme;
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return <NavBar />;
}

export default App;
