import { coinConfig } from "../config/coinConfig";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-base-200 text-base-content w-full overflow-hidden mt-10 px-4 py-5 flex flex-col items-center gap-4 text-center"
    >
      <div className="text-2xl sm:text-3xl font-black">
        {coinConfig.hero.coinTicker}
      </div>

      <a
        href={coinConfig.footer.socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="link link-hover font-bold"
      >
        X (Twitter)
      </a>

      <p className="text-xs opacity-50 break-all w-full max-w-sm">
        CA: {coinConfig.hero.contractAddress || "Coming soon"}
      </p>

      <p className="text-xs opacity-40 max-w-sm">
        {coinConfig.footer.disclaimer}
      </p>

      <p className="text-xs opacity-30">
        © 2025 {coinConfig.hero.coinTicker}. All rights reserved. probably.
      </p>
    </footer>
  );
};
