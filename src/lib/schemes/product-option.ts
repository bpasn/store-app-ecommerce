import { z } from "zod";
import { productOptionChoiceScheme } from "./product-option-choice";


export const productOptionScheme = z.object({
    id: z.string(),
    optionName: z.string(),
    oneMustBeChosen: z.boolean().default(false),
    manyCanBeChosen: z.boolean().default(false),
    lengthSelect: z.number(),
    choices: z.array(productOptionChoiceScheme)
}).refine(e => {
    if (!e.choices.length && e.oneMustBeChosen) {
        return false;
    }
    return true;
}, (e) => ({
    message: e.optionName + " is required",
    path: ["choices"]
}));
export type ProductOptionScheme = z.infer<typeof productOptionScheme>;