import { devWalletFilter } from "./devWalletFilter";
import { mayhemFilter } from "./mayhemFilter";
import { metadataFilter } from "./metadataFilter";

type Filter = (token: any) => string | null | Promise<string | null>;

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
