import { useState } from "react";
import { coinConfig } from "../config/coinConfig";

export const HowToBuy = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(coinConfig.hero.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="howtobuy" className="py-16 w-3/4 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">How To Buy</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {coinConfig.howToBuy.steps.map((step, index) => (
          <div key={index} className="card bg-base-200 shadow-md">
            <div className="card-body items-center text-center">
              <div className="text-4xl font-black text-primary">
                {index + 1}
              </div>
              <h3 className="card-title">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
              {step.button.action === "copy" ? (
                <button
                  className="btn btn-primary btn-sm mt-2"
                  onClick={handleCopy}
                >
                  {copied ? "Copied!" : step.button.label}
                </button>
              ) : (
                <a
                  href={step.button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary btn-sm mt-2">
                    {step.button.label}
                  </button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {copied && (
        <div className="toast">
          <div className="alert alert-success">
            <span>Contract address copied!</span>
          </div>
        </div>
      )}
    </section>
  );
};
