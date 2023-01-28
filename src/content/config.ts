import { defineCollection, z } from "astro:content";

const PostSchema = {
  title: z.string(),
  pubDate: z.date().transform((date) => new Date(date)),
  description: z.string(),
  author: z.enum(["Thilina Gunasekara"]),
  tags: z.array(z.string()),
  tweets: z.array(z.string()).optional(),
  featured: z.boolean().optional().default(false),
  draft: z.boolean().optional().default(true),
};

const writing = defineCollection({
  schema: z.object({
    ...PostSchema,
  }),
});

const projects = defineCollection({
  schema: z.object({
    ...PostSchema,
  }),
});

const hiking = defineCollection({
  schema: z.object({
    ...PostSchema,
    description: z.string().optional(),
  }),
});

export const collections = {
  writing,
  projects,
  hiking,
};
