import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const heroSchema = z.object({
  eyebrow: z.string(),
  heading: z.string(),
  highlight: z.string().optional(),
  text: z.string(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: heroSchema,
    home: z.object({
      primaryActionLabel: z.string(),
      phoneActionLabel: z.string(),
      noteStrong: z.string(),
      noteText: z.string(),
      statusSmall: z.string(),
      statusStrong: z.string(),
      trustAriaLabel: z.string(),
      trust: z.array(z.object({
        number: z.string(),
        title: z.string(),
        text: z.string(),
        href: z.string(),
      })),
      explore: z.object({
        eyebrow: z.string(),
        heading: z.string(),
        text: z.string(),
      }),
    }).optional(),
    serviceList: z.object({
      ctaLabel: z.string(),
      ctaAriaSuffix: z.string(),
    }).optional(),
    about: z.object({
      image: z.string(),
      imageAlt: z.string(),
      imageCaption: z.string(),
      lead: z.string(),
      principles: z.array(z.object({
        title: z.string(),
        text: z.string(),
      })),
      ctaLabel: z.string(),
    }).optional(),
    contact: z.object({
      intro: z.string(),
      phoneCtaLabel: z.string(),
      whatsappCtaLabel: z.string(),
      labels: z.object({
        phone: z.string(),
        hours: z.string(),
        address: z.string(),
      }),
      mapTitle: z.string(),
      mapSmall: z.string(),
      mapStrong: z.string(),
    }).optional(),
    faqPage: z.object({
      ctaLabel: z.string(),
    }).optional(),
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
