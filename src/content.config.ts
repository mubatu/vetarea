import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const heroSchema = z.object({
  heading: z.string(),
  highlight: z.string().optional(),
  text: z.string(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
});

const publicAssetPathPattern = /^\/[A-Za-z0-9._~/-]+$/;

const imageSourceSchema = z.string().trim().refine(
  (value) => {
    if (value.startsWith("/")) return publicAssetPathPattern.test(value);

    return z.string().url().safeParse(value).success;
  },
  "Must be an absolute URL or an ASCII public asset path that starts with /",
);

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: heroSchema.optional(),
    home: z.object({
      primaryActionLabel: z.string(),
      trustAriaLabel: z.string(),
      trust: z.array(z.object({
        icon: z.enum(["stethoscope", "users", "map-pin"]),
        title: z.string(),
        text: z.string(),
        href: z.string(),
      })),
    }).optional(),
    serviceList: z.object({
      ctaLabel: z.string(),
      ctaAriaSuffix: z.string(),
    }).optional(),
    about: z.object({
      images: z.array(z.object({
        src: imageSourceSchema,
        alt: z.string().trim().min(1),
        caption: z.string().trim().min(1),
      })).min(2),
      lead: z.string(),
      principles: z.array(z.object({
        title: z.string(),
        text: z.string(),
      })),
      teamHeading: z.string(),
      teamText: z.string(),
    }).optional(),
    contact: z.object({
      intro: z.string(),
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
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string().trim().min(1),
    image: imageSourceSchema,
    imageAlt: z.string().trim().min(1),
  }),
});

const serviceLists = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/service-lists" }),
  schema: z.object({
    services: z.array(z.string().regex(/^[a-z0-9-]+$/)).min(1),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    order: z.number().int().positive(),
    name: z.string(),
    role: z.string(),
    initials: z.string().min(2).max(3),
    image: imageSourceSchema.optional(),
    imageAlt: z.string().trim().min(1).optional(),
  }),
});

export const collections = { pages, services, serviceLists, team };
