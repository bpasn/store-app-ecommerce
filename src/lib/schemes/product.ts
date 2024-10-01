import { z } from "zod";
import { productImageScheme } from "./product-image";
import { productCategoryScheme } from "./product-category";
import { productOptionScheme } from "./product-option";
import { productStockScheme } from "./product-stock";

export const productScheme = z.object({
    id: z.string(),
    nameTH: z.string(),
    nameEN: z.string(),
    descriptionTH: z.string(),
    descriptionEN: z.string(),
    price: z.number(),
    stock: productStockScheme,
    productImages: z.array(productImageScheme),
    categories: z.array(productCategoryScheme),
    productOptions: z.array(productOptionScheme)
});


export type ProductModel = z.infer<typeof productScheme>;
export type ProductWithoutCategory = Omit<ProductModel, "categories">;