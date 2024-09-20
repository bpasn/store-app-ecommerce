"use client";

import Menu from "@/assets/menu1.jpg";
import { useStoreDrawer } from "@/lib/hooks/store-drawer";
import { Button } from "@/modules/components/ui/button";
import { Plus, Tag } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface ProductCardProps {
    product: ProductModal;
}
const ProductCard = ({
    product
}: ProductCardProps) => {
    const {
        setOpen,
        setProduct
    } = useStoreDrawer();

    const handleClick = () => {
        setProduct(product)
        setOpen(true);
    };
    return (
        <div className="md:h-[350px] w-full rounded-none shadow-none border-b-gray-300 relative pb-8">
            <div className="p-0 pt-2  border-t-0 border-l-0 border-r-0 border md:rounded-xl md:shadow-md  border-b-gray-300 pb-2 ">
                <div className=" flex flex-row md:flex-col gap-5">
                    <div className="h-32 w-32 md:h-36 md:w-full relative">
                        <Image fill src={`${process.env.NEXT_PUBLIC_DOMAIN_IMAGE}/${product.productImages[0].uri}`} alt={"menu"} className="object-cover md:object-fill rounded-xl md:rounded-b-none" />
                    </div>
                    <div className="flex flex-col gap-2 px-3">
                        <p className="text-primary text-xs">ยอดสั่งซื้อเยอะที่สุด</p>
                        <p className="text-sm">Promotion</p>
                        <p className="text-sm">{product.nameTH}</p>
                        <p className="text-sm mt-4 flex flex-row gap-2 items-center">
                            <span className="font-bold">{product.price}</span>
                            <span className="line-through text-gray-500">69</span>
                            <Tag className="text-primary" size={16} strokeWidth={2} />
                        </p>
                    </div>
                </div>
                <div className="text-end px-3">
                    <Button className={" p-0 m-0 ml-auto rounded-full h-8 w-8 shadow-md ring-ring hover:bg-primary/60"}>
                        <Plus size={18} strokeWidth={3} onClick={handleClick} />
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;