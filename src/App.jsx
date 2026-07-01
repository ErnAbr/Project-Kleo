import { useEffect } from "react";
import { coinConfig } from "./config/coinConfig";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { HowToBuy } from "./components/HowToBuy";
import { Roadmap } from "./components/RoadMap";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

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
      <div className="flex flex-col items-center justify-center gap-1">
        <Hero />
        <HowToBuy />
        <Roadmap />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}

export default App;
