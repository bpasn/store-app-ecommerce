import { z } from "zod";
import { choiceScheme } from "./product-option-choice";


export const productOptionScheme = z.object({
    id: z.string(),
    optionName: z.string(),
    oneMustBeChosen: z.boolean().default(false),
    manyCanBeChosen: z.boolean().default(false),
    lengthSelect: z.number(),
    choices: z.array(choiceScheme)
}).refine(e => {
    if(!e.choices.length && e.oneMustBeChosen){
        return false;
    }
    return true;
}, (e) => ({
    message: e.optionName + " is required",
    path:["choices"]
}));
export type OptionChoiceScheme = z.infer<typeof productOptionScheme>;