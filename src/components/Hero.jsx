import { useState } from "react";
import { coinConfig } from "../config/coinConfig";

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(coinConfig.hero.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="hero"
      className="hero bg-base-200 mt-2 w-3/4 mx-auto overflow-hidden"
    >
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={coinConfig.hero.image}
          className="w-32 sm:w-48 lg:w-auto lg:max-w-sm rounded-lg shadow-2xl"
        />
        <div className="lg:mt-0 mt-5">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
            {coinConfig.hero.title}{" "}
            <span className="text-primary">{coinConfig.hero.coinTicker}</span>
          </h1>
          <p className="py-6">{coinConfig.hero.description}</p>
          <p className="text-sm opacity-60 mb-4 break-all">
            {coinConfig.hero.contractAddress || "Contract address coming soon"}
          </p>
          <a
            href={coinConfig.hero.buyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary btn-sm sm:btn-md">
              Buy Here!!!
            </button>
          </a>
          <button
            className="btn btn-secondary btn-sm sm:btn-md ml-3"
            onClick={handleCopy}
          >
            Copy Contract
          </button>
        </div>
      </div>
      {copied && (
        <div className="toast">
          <div className="alert alert-success">
            <span>Contract address copied!</span>
          </div>
        </div>
      )}
    </div>
  );
};
