// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'

// 2. Define your collection(s)
const blogSchema = z.object({
  title: z.string(),
  description: z.string().max(160).optional(),
  author: z.string().optional(),
  lang: z.enum(['en', 'ja']),
  image: z.string().optional(),
  draft: z.boolean(),
  createdAt: z.string().transform((str) => new Date(str)),
  updatedAt: z.string().transform((str) => new Date(str)),
  publishedAt: z.string().transform((str) => new Date(str)),
})
const blogCollection = defineCollection({ schema: blogSchema })

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
}
