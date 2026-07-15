import { runFilters } from "./filters";
import { connectPumpPortal } from "./pumpSocket";

connectPumpPortal(async (token) => {
  const rejectionReason = await runFilters(token);

  if (rejectionReason === null) {
    console.log(token);
  } else {
    console.log(`REJECTED: ${token.symbol} — ${rejectionReason}`);
  }
});
