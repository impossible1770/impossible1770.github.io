import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
});
export type BlogSchema = z.infer<typeof blogSchema>;

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    link: z.string(),
})
export type ProjectSchema = z.infer<typeof projectSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectCollection = defineCollection({schema: projectSchema});

export const collections = {
    "blog": blogCollection,
    'projects': projectCollection
}
