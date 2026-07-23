import { settings } from "../../settings";
import { Filter } from "../types";

export const devWalletFilter: Filter = (token) => {
  const initialBuy = token.initialBuy;

  const devPosition = (100 / settings.initialTokensOnPump) * initialBuy;

  if (parseFloat(devPosition.toFixed(2)) > settings.devWalletPosition) {
    return `dev wallet position is too big, it is ${devPosition.toFixed(2)}`;
  } else return null;
};
