import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    title: z.string(),
    tags: z.array(z.string()),
    link: z.string(),
    blurb: z.string(),
  }),
});

export const collections = {
  projects: projects,
};
