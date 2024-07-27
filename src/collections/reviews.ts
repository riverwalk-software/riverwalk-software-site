import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        company: z.string(),
        link: z.string().url(),
        location: z
          .object({
            city: z.string(),
            country: z.string(),
          })
          .strict(),
        name: z.string(),
        photo: image().refine(
          (image) => image.width >= 200 && image.height >= 200,
          {
            message: "Photo must be at least 200x200px",
          },
        ),
        sortOrder: z.number(),
        role: z.string(),
      })
      .strict(),
});