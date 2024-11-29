import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    moreInfo: z.string().optional(),
    order: z.number(),
    // Transform string to Date object
    // pubDate: z.coerce.date(),
    // updatedDate: z.coerce.date().optional(),
    images: z.array(z.string()),
    client: z.string().optional(),
    role: z.string().optional(),
    deliverables: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { projects };
