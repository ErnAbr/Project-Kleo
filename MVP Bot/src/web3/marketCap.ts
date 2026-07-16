import { Address, createSolanaRpc } from "@solana/kit";

const rpc = createSolanaRpc("https://api.mainnet-beta.solana.com");

const SOL_DECIMALS = 1_000_000_000;
const TOKEN_DECIMALS = 1_000_000;

const solanaPrice = 76;

async function getMarketCap() {
  const bondingCurve =
    "H5C6qg5tyrW37qtYAXV2cG7AsGGqCbCAxMPtnKxegHbH" as Address;

  const account = await rpc
    .getAccountInfo(bondingCurve, { encoding: "base64" })
    .send();

  if (!account.value) {
    throw new Error("Bonding curve account not found");
  }

  const [data, encoding] = account.value.data;
  const buffer = Buffer.from(data, encoding);

  const ANCHOR_DISCRIMINATOR_SIZE = 8;

  const virtualTokenReserves = Number(
    buffer.readBigUInt64LE(ANCHOR_DISCRIMINATOR_SIZE),
  );

  const virtualSolReserves = Number(
    buffer.readBigUInt64LE(ANCHOR_DISCRIMINATOR_SIZE + 8),
  );

  const totalSupply = Number(
    buffer.readBigUInt64LE(ANCHOR_DISCRIMINATOR_SIZE + 32),
  );

  const priceInSol =
    virtualSolReserves / SOL_DECIMALS / (virtualTokenReserves / TOKEN_DECIMALS);

  const supply = totalSupply / TOKEN_DECIMALS;

  const marketCapInSol = priceInSol * supply;
  const marketCapInUsd = marketCapInSol * solanaPrice;

  console.log(`Market Cap: ${marketCapInSol.toFixed(2)} SOL`);
  console.log(`Market Cap: $${marketCapInUsd.toFixed(2)}`);

  return marketCapInUsd;
}

await getMarketCap();
