import { useEffect } from "react";
import { coinConfig } from "./config/coinConfig";
import "./App.css";
import { NavBar } from "./components/NavBar";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", coinConfig.theme);
    document.documentElement.style.setProperty(
      "--font-active",
      coinConfig.font,
    );
  }, []);

  return <NavBar />;
}

export default App;
