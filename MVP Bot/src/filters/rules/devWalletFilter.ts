import { Filter } from "../types";

const filterParams = {
  devWalletPosition: 20,
};

export const devWalletFilter: Filter = (token) => {
  const initialTokens = 1000000000;
  const initialBuy = token.initialBuy;

  const devPosition = (100 / initialTokens) * initialBuy;

  if (parseFloat(devPosition.toFixed(2)) > filterParams.devWalletPosition) {
    return `dev wallet position is too big, it is ${devPosition.toFixed(2)}`;
  } else return null;
};
