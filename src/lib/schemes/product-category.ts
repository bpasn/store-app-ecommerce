import { z } from "zod";

export const productCategoryScheme = z.object({
    id: z.string(),
    name: z.string()
});