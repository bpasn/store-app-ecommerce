"use client";

import { EachElement } from "@/lib/utils";
import ProductCard from "./components/product-card";

const Product = () => {
    return (
        <div className="py-8 grid grid-cols-1 md:gap-10 md:grid-cols-4">
            <EachElement
            of={Array.from(Array(5).keys())}
                render={() => {
                    return (
                        <ProductCard />
                    )
                }}
            />
        </div>
    );
}

export default Product;