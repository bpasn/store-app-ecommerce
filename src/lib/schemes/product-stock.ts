import { z } from "zod";

export const productStockScheme = z.object({
    id: z.string(),
    unitType: z.enum(['PIECE', 'KILOGRAM', 'GRAM']),
    unitQuantity:z.number(),
    quantity:z.number(),
    status: z.enum(['IN_STOCK','OUT_OF_STOCK','LOW_STOCK'])
});