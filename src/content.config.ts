import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      highlight: z.string(),
      text: z.string(),
      imageAlt: z.string(),
    }),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    order: z.number().int().positive(),
    title: z.string(),
    description: z.string(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    order: z.number().int().positive(),
    name: z.string(),
    role: z.string(),
    initials: z.string().min(2).max(3),
  }),
});

export const collections = { pages, services, team };
