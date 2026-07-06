const PUMP_FUN_LINK =
  "https://pump.fun/coin/24w3W5jcYHApx64KGNPRfAMXfNcdF9QevWcWcXutpump";

export const coinConfig = {
  hero: {
    image: "./HeroImage.JPG",
    title: "Cat Gone MAD!!!",
    description:
      "Always hungry, always looking for food, only sleep when nobody is home and attak when somebody gets back. That's the life of the Kleo CAT. Give him food or suffer the meowing and attak on your legs. WATCH YOUR STEP!!!",
    buyLink: PUMP_FUN_LINK,
    contractAddress: "",
    coinTicker: "$KLEO",
    badges: ["✓ 0% Tax", "✓ Fair Launch", "✓ Liquidity Burned"],
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

  roadmap: {
    icon: "🐾",
    phases: [
      {
        phase: "Phase 1",
        title: "Wake Up",
        items: [
          "Refuse to get out of bed",
          "Demand breakfast immediately",
          "Token launches whether you like it or not",
        ],
      },
      {
        phase: "Phase 2",
        title: "Demand Food (Marketing)",
        items: [
          "Scream at everyone on Crypto Twitter",
          "Knock Dexscreener off the table",
          "Bite the hand that doesn't buy",
        ],
      },
      {
        phase: "Phase 3",
        title: "Knock Things Off Tables",
        items: [
          "Hit the bonding curve",
          "Destroy all FUD like a keyboard",
          "Diamond paws only 🐾",
        ],
      },
      {
        phase: "Phase 4",
        title: "World Domination",
        items: [
          "CEX listing (Kleo demands it)",
          "Buy unlimited cat food",
          "Nap on top of the moon 🌙",
        ],
      },
    ],
  },

  faq: {
    questions: [
      {
        q: "Is this a rug pull?",
        a: "Kleo is too lazy to run anywhere. Liquidity is burned, just like his patience for empty food bowls.",
      },
      {
        q: "Is this a good investment?",
        a: "We are a cat on the blockchain. Please do your own research. Kleo is not a financial advisor, he is a menace.",
      },
      {
        q: "Why should I buy $KLEO?",
        a: "Because Kleo will scream at you until you do. Have you ever tried sleeping through that?",
      },
      {
        q: "When moon?",
        a: "Kleo is already napping on the moon. The question is when YOU get there.",
      },
      {
        q: "Who is the team?",
        a: "One very angry cat and his reluctant human servant.",
      },
    ],
  },

  footer: {
    socialLinks: {
      twitter: "https://x.com/yourhandle",
    },
    disclaimer:
      "This is a meme coin with no intrinsic value or financial return expectation. Not financial advice. Always do your own research.",
  },
  theme: "coffee",
  font: '"Fredoka", sans-serif',
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
