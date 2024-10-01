import { z } from "zod";

export const productImageScheme = z.object({
    id:z.string(),
    source:z.string()
});