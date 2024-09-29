"use client";

import { useStoreDrawer } from "@/lib/hooks/store-drawer";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/modules/components/ui/button";
import ImageProvider from "@/providers/image-provider";
import { Plus } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
    product: ProductWithCategory;
}
const ProductCard = ({
    product
}: ProductCardProps) => {
    const {
        setProduct
    } = useStoreDrawer();
    const handleClick = () => {
        setProduct(product);
    };
    return (
        <div className="h-full w-full shadow-none border-b-gray-300 relative">
            <div className="p-0 cursor-pointer" onClick={handleClick}>
                <div className=" flex flex-row gap-5">
                    <div className=" w-[144px] h-[96px] relative">
                        <ImageProvider 
                            fill
                            src={product.productImages[0].source}
                            className="object-cover rounded-md" />
                    </div>
                    <div className="flex flex-row gap-2 px-3 flex-1">
                        <p className="text-md">{product.nameTH}</p>
                        <span className="font-bold ml-auto">{formatPrice(product.price)}</span>
                    </div>
                </div>
            </div>
            {/* <div className="text-end px-3 absolute right-0 bottom-[40px]">
                <Button onClick={handleClick} className={" p-0 m-0 ml-auto rounded-full h-8 w-8 shadow-md ring-ring hover:bg-primary/60"}>
                    <Plus size={18} strokeWidth={3} />
                </Button>
            </div> */}
        </div>
    );
};

export default ProductCard;