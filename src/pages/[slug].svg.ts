import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getOgImage } from "../utils";

export const get: APIRoute = async ({ params, request }) => {
  const slug = params.slug;
  const writingEntries = await getCollection("writing");
  const entry = writingEntries.find((entry) => entry.slug === slug);

  if (!entry) {
    return {
      body: "",
    };
  }

  return {
    body: await getOgImage(entry.data.coverChars!, entry.data.title),
  };
};

// export async function getStaticPaths() {
//   const writingEntries = await getCollection("writing");
//   return writingEntries.map((entry) => ({
//     params: { slug: entry.slug },
//   }));
// }
