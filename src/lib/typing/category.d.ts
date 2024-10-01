import { ProductWithoutCategory } from "../schemes/product";

interface CategoryWithProduct {
    categoryId: string;
    categoryName: string;
    products: ProductWithoutCategory[];
}