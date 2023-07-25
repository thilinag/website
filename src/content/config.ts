import { defineCollection, z } from "astro:content";

export const PostSchema = z.object({
  title: z.string(),
  pubDate: z.date().transform((date) => new Date(date)),
  description: z.string(),
  author: z.enum(["Thilina Gunasekara"]),
  tags: z.array(z.string()),
  tweets: z
    .array(
      z.object({
        link: z.string(),
        text: z.string().optional(),
        video: z.boolean().optional(),
        images: z
          .array(
            z.object({
              googleDriveId: z.string(),
              label: z.string().optional(),
            })
          )
          .optional(),
      })
    )
    .optional()
    .default([]),
  featured: z.boolean().optional().default(false),
  draft: z.boolean().optional().default(false),
  coverChars: z.array(z.string()).optional(),
});

const writing = defineCollection({
  schema: PostSchema.extend({
    toc: z.boolean().default(false).describe("Show table of contents?"),
  }),
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
