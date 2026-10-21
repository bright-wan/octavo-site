import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// One Markdown file per release: src/content/releases/<version>.md
const releases = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/releases' }),
  schema: z.object({
    version: z.string(),
    date: z.coerce.date(),
    platforms: z.array(z.enum(['macOS', 'Windows', 'Linux'])),
  }),
})

export const collections = { releases }
