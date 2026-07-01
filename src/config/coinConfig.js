const PUMP_FUN_LINK = "https://pump.fun/coin/YOUR_CONTRACT";

export const coinConfig = {
  hero: {
    image: "./HeroImage.png",
    title: "Cat Gone MAD!!!",
    description:
      "Always hungry, always looking for food, only sleep when nobody is home and attak when somebody gets back. That's the life of the Kleo CAT. Give him food or suffer the meowing, he jumps on your legs and you hurt him, that's your problem!!!",
    buyLink: PUMP_FUN_LINK,
    contractAddress: "test contract address",
    coinTicker: "$KLEO",
  },

  howToBuy: {
    steps: [
      {
        title: "Get Phantom",
        description: "Download the Phantom wallet app or browser extension.",
        button: { label: "Download", href: "https://phantom.app" },
      },
      {
        title: "Buy SOL",
        description:
          "Buy Solana on any exchange and send it to your Phantom wallet.",
        button: { label: "Buy SOL", href: "https://www.coinbase.com" },
      },
      {
        title: "Go to pump.fun",
        description: "Open pump.fun and connect your Phantom wallet.",
        button: { label: "Open pump.fun", href: "http://pump.fun" },
      },
      {
        title: "Find the Coin",
        description: "Paste the contract address in the search bar.",
        button: { label: "Copy Contract", action: "copy" },
      },
      {
        title: "Swap!",
        description: "Enter the amount of SOL and hit swap. You're in!",
        button: { label: "Buy Now", href: PUMP_FUN_LINK },
      },
    ],
  },
  theme: "bumblebee",
  font: '"Bangers", cursive',
};

// Available daisyUI themes:
// Light themes:
// light, cupcake, bumblebee, emerald, corporate, retro,
// garden, lofi, pastel, fantasy, wireframe, cmyk,
// autumn, lemonade, winter, nord, caramellatte, silk
//
// Dark themes:
// dark, synthwave, cyberpunk, valentine, halloween,
// forest, aqua, black, luxury, dracula, business,
// acid, night, coffee, dim, sunset, abyss

//************************************************\\

// Available fonts:
// '"Henny Penny", sans-serif'  — wobbly/goofy
// '"Bangers", cursive'         — bold comic book
// '"Press Start 2P", monospace'— retro pixel
// '"Boogaloo", sans-serif'     — rounded/casual
// '"Righteous", sans-serif'    — clean/futuristic
// '"Titan One", cursive'       — chunky/hype
// '"Fredoka", sans-serif'      — friendly/cute
// '"Russo One", sans-serif'    — strong/modern
// '"Creepster", cursive'       — spooky/dark
// '"Lilita One", cursive'      — heavy/punchy
