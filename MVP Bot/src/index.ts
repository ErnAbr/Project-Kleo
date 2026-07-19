import { runFilters } from "./filters";
import { connectPumpPortal } from "./pumpSocket";
import { sendTelegramAlert } from "./telegram";
import { getRealSolReserves } from "./web3/realSolReserves";

connectPumpPortal(async (token) => {
  const rejectionReason = await runFilters(token);
  let realSolInitial = 0;

  if (rejectionReason === null) {
    try {
      realSolInitial = await getRealSolReserves(token.bondingCurveKey);
    } catch (err) {
      console.error(
        `Failed to read initial reserves for ${token.symbol}:`,
        err,
      );
      return;
    }

    setTimeout(
      async () => {
        try {
          const realSolAfter = await getRealSolReserves(token.bondingCurveKey);
          if (realSolAfter - realSolInitial > 0.1) {
            const photonUrl = `https://photon-sol.tinyastro.io/en/lp/${token.mint}`;
            const pumpUrl = `https://pump.fun/coin/${token.mint}`;
            sendTelegramAlert(`photon: ${photonUrl} and pump: ${pumpUrl}`);
            console.log(token);
          } else {
            console.log(
              `REJECTED: ${token.symbol} — diff ${(realSolAfter - realSolInitial).toFixed(3)} of SOL in 5 min https://pump.fun/coin/${token.mint}`,
            );
          }
        } catch (err) {
          console.error(
            `Failed to read reserves after delay for ${token.symbol}:`,
            err,
          );
        }
      },
      5 * 60 * 1000,
    );
  } else {
    console.log(`REJECTED: ${token.symbol} — ${rejectionReason}`);
  }
});
