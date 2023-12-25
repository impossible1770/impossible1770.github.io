import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    sourceUrl: z.string().optional(),
});
export type BlogSchema = z.infer<typeof blogSchema>;

const projectSchema = z.object({
    name: z.string(),
    role: z.string(),
    teamSize: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    image: z.string().optional(),
    priority: z.int(),
})
export type ProjectSchema = z.infer<typeof projectSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectCollection = defineCollection({schema: projectSchema});

export const collections = {
    "blog": blogCollection,
    'projects': projectCollection
}
