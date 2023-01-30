import { defineCollection, z } from "astro:content";

const PostSchema = z.object({
  title: z.string(),
  pubDate: z.date().transform((date) => new Date(date)),
  description: z.string(),
  author: z.enum(["Thilina Gunasekara"]),
  tags: z.array(z.string()),
  tweets: z.array(z.string()).optional(),
  featured: z.boolean().optional().default(false),
  draft: z.boolean().optional().default(true),
});

const writing = defineCollection({
  schema: PostSchema,
});

const projects = defineCollection({
  schema: PostSchema,
});

const hiking = defineCollection({
  schema: PostSchema.extend({
    description: z.string().optional(),
    geoJson: z
      .object({
        type: z.string(),
        features: z.array(z.any()),
      })
      .optional(),
    distance: z.number().optional().describe("distance in km"),
    elevation: z.number().optional().describe("distance in m"),
    steps: z.number().optional(),
  }),
});

export const collections = {
  writing,
  projects,
  hiking,
};
