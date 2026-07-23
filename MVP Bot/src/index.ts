import { runFilters } from "./filters/static";
import { connectPumpPortal } from "./pumpSocket";
import { checkRealSolGrowth } from "./filters/dynamic/checkRealSolGrowth";

connectPumpPortal(async (token) => {
  const rejectionReason = await runFilters(token);

  if (rejectionReason === null) {
    const realSolGrowthResult = await checkRealSolGrowth(token);
    if (realSolGrowthResult) {
      console.log(token);
    }
  } else {
    console.log(`REJECTED: ${token.symbol} — ${rejectionReason}`);
  }
});
