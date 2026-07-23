import { Address, createSolanaRpc } from "@solana/kit";

const rpc = createSolanaRpc("https://api.mainnet-beta.solana.com");

export async function getTradeCount(
  bondingCurveAddress: Address,
  //   sinceMinutesAgo: number
): Promise<any> {
  const signatures = await rpc
    .getSignaturesForAddress(bondingCurveAddress, { limit: 50 })
    .send();

  // signatures is an array of objects, each with a `blockTime` field
  // (Unix timestamp in SECONDS, not milliseconds — worth double-checking this
  // when you test it, since JS's Date.now() gives milliseconds)

  //   const cutoffTime = /* ??? — "now" minus sinceMinutesAgo, in the same unit as blockTime */;

  //   const recentCount = /* filter signatures down to ones newer than cutoffTime, then count them */;

  //   return recentCount;

  console.log(signatures);

  return signatures;
}

getTradeCount("6Wrxet1iAy8cpk8gAWkWL4v2aV3pTwbYDP8v4YHWpxHb" as Address);
