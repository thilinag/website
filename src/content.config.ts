import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

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
      })
    )
    .optional()
    .default([]),
  // images: z
  // .array(
  //   z.object({
  //     file: image(),
  //     alt: z.string().optional(),
  //   })
  // ),
  featured: z.boolean().optional().default(false),
  draft: z.boolean().optional().default(false),
  coverChars: z.array(z.string()).optional(),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/writing" }),
  schema: ({ image }) => z.object({
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
        })
      )
      .optional()
      .default([]),
    images: z
    .array(
      z.object({
        file: image(),
        alt: z.string().optional(),
      })
    )
    .optional()
    .default([]),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    coverChars: z.array(z.string()).optional(),
    toc: z.boolean().default(false).describe("Show table of contents?"),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
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
        })
      )
      .optional()
      .default([]),
    images: z
    .array(
      z.object({
        file: image(),
        alt: z.string().optional(),
      })
    )
    .optional().default([]),  
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    coverChars: z.array(z.string()).optional(),
  }),
});

const hiking = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/hiking" }),
  schema: ({ image }) => z.object({
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
    title: z.string(),
    pubDate: z.date().transform((date) => new Date(date)),
    author: z.enum(["Thilina Gunasekara"]),
    tags: z.array(z.string()),
    tweets: z
      .array(
        z.object({
          link: z.string(),
          text: z.string().optional(),
          video: z.boolean().optional(),
        })
      )
      .optional()
      .default([]),
    images: z
    .array(
      z.object({
        file: image(),
        alt: z.string().optional(),
      })
    )
    .optional()
    .default([]),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    coverChars: z.array(z.string()).optional(),
  }),
});

export const collections = {
  writing,
  projects,
  hiking,
};
