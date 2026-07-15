import { devWalletFilter } from "./rules/devWalletFilter";
import { mayhemFilter } from "./rules/mayhemFilter";
import { metadataFilter } from "./rules/metadataFilter";
import { Filter } from "./types";

const filters: Filter[] = [mayhemFilter, devWalletFilter, metadataFilter];

export async function runFilters(token: any): Promise<string | null> {
  for (const filter of filters) {
    const result = await filter(token);
    if (result !== null) {
      return result;
    }
  }
  return null;
}
