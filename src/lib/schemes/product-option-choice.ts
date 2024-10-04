import { z } from "zod";

export const productOptionChoiceScheme = z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    choiceEffect: z.enum(['unchanged', 'increased', 'decreased']).default("unchanged"),
    status: z.enum(['available', 'suspended']).default("available")
});


export type ProductOptionChoiceScheme = z.infer<typeof productOptionChoiceScheme>;