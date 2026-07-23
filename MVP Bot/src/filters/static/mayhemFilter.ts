import { Filter } from "../types";

export const mayhemFilter: Filter = (token) => {
  if (token.is_mayhem_mode) return `mayhem mode is active`;
  else return null;
};
