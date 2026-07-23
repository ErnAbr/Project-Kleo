import { Address, createSolanaRpc } from "@solana/kit";

const rpc = createSolanaRpc("https://api.mainnet-beta.solana.com");
const SOL_DECIMALS = 1_000_000_000;

export async function getRealSolReserves(
  bondingCurveAddress: Address,
): Promise<number> {
  const account = await rpc
    .getAccountInfo(bondingCurveAddress, { encoding: "base64" })
    .send();

  if (!account.value) {
    throw new Error("Bonding curve account not found");
  }
  const [data, encoding] = account.value.data;
  const buffer = Buffer.from(data, encoding);

  const REAL_SOL_RESERVES_OFFSET = 32;

  const realSolReservesRaw = buffer.readBigUInt64LE(REAL_SOL_RESERVES_OFFSET);
  const realSolReserves = Number(realSolReservesRaw) / SOL_DECIMALS;

  return realSolReserves;
}
