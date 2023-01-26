import { defineCollection, z } from "astro:content";

const writingCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date().transform((date) => new Date(date)),
    description: z.string(),
    author: z.enum(["Thilina Gunasekara"]),
    tags: z.array(z.string()),
    tweets: z.array(z.string()).optional(),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date().transform((date) => new Date(date)),
    description: z.string(),
    author: z.enum(["Thilina Gunasekara"]),
    tags: z.array(z.string()),
    tweets: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const hikingCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date().transform((date) => new Date(date)),
    description: z.string().optional(),
    author: z.enum(["Thilina Gunasekara"]),
    tags: z.array(z.string()),
    tweets: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  writing: writingCollection,
  projects: projectsCollection,
  hiking: hikingCollection,
};
