import { Filter } from "../types";

export async function fetchMetadata(uri: string): Promise<any | null> {
  try {
    const response = await fetch(uri);
    if (!response.ok) return null; //
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export const metadataFilter: Filter = async (token) => {
  const metadata = await fetchMetadata(token.uri);

  if (metadata === null) {
    return "metadata URI unreachable";
  }

  const hasTwitter = metadata.twitter && metadata.twitter.trim() !== "";
  const hasWebsite = metadata.website && metadata.website.trim() !== "";

  if (!hasTwitter && !hasWebsite) {
    return "no socials (twitter/website) in metadata";
  }

  return null;
};
