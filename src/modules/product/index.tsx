"use client";

import { EachElement } from "@/lib/utils";
import ProductCard from "./components/product-card";

interface ProductProps {
    products: ProductModal[];
}
const Product = ({
    products
}: ProductProps) => {
    return (
        <div className="py-8 grid grid-cols-1 md:gap-10 md:grid-cols-4">
            <EachElement
                of={products}
                render={(product: ProductModal) => {
                    return (
                        <ProductCard product={product} />
                    );
                }}
            />
        </div>
    );
};

export default Product;