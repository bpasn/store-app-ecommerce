"use client";

import { EachElement } from "@/lib/utils";
import React from "react";
import { Separator } from "../components/ui/separator";
import ProductCard from "./components/product-card";

interface ProductProps {
    products: ProductWithCategory[];
}
const Product = ({
    products
}: ProductProps) => {
    return (
        <div className="py-2 px-3 flex flex-col gap-3">
            <EachElement
                of={products}
                render={(product: ProductWithCategory, index) => {
                    return (
                        <React.Fragment>
                            {index >= 1 && (<Separator />)}
                            <ProductCard product={product} />

                        </React.Fragment>
                    );
                }}
            />
        </div>
    );
};

export default Product;