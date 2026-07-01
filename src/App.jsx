import { useEffect } from "react";
import { coinConfig } from "./config/coinConfig";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { HowToBuy } from "./components/HowToBuy";
import { Tokenomics } from "./components/Tokenomics";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", coinConfig.theme);
    document.documentElement.style.setProperty(
      "--font-active",
      coinConfig.font,
    );
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-5">
        <Hero />
        <HowToBuy />
        <Tokenomics />
      </div>
    </>
  );
}

export default App;
