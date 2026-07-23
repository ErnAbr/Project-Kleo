import { getRealSolReserves } from "../../helpers/realSolReserves";
import { settings } from "../../settings";

export const checkRealSolGrowth = async (token: any) => {
  let realSolInitial = 0;
  try {
    realSolInitial = await getRealSolReserves(token.bondingCurveKey);
  } catch (error) {
    console.error(
      `Failed to read initial reserves for ${token.symbol}:`,
      error,
    );
    return null;
  }

  return new Promise<boolean | null>((resolve) => {
    setTimeout(
      async () => {
        try {
          const realSolAfter = await getRealSolReserves(token.bondingCurveKey);
          const diff = realSolAfter - realSolInitial;

          if (diff > settings.realSolDiffAfterProgressCheckInMinutes) {
            resolve(true);
          } else {
            console.log(
              `REJECTED: ${token.symbol} — diff ${diff.toFixed(3)} of SOL in ${settings.progressCheckInMinutes} https://pump.fun/coin/${token.mint}`,
            );
            resolve(false);
          }
        } catch (error) {
          console.error(
            `Failed to read reserves after delay for ${token.symbol}:`,
            error,
          );
          resolve(null);
        }
      },
      settings.progressCheckInMinutes * 60 * 1000,
    );
  });
};
