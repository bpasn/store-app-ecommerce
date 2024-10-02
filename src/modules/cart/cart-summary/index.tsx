"use client";
import { useStoreCart } from "@/lib/hooks/store-cart";
import { toast } from "@/lib/hooks/use-toast";
import { createOrder, OrderCreate } from "@/lib/services/order.service";
import { cn, formatPrice, report, summary } from "@/lib/utils";
import { Button } from "@/modules/components/ui/button";
import { Separator } from "@/modules/components/ui/separator";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";

const CartSummary = () => {
    const { cart: carts ,reset } = useStoreCart();
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const totalPrice = useMemo(() => {
        return carts && carts.length > 0 ? summary(carts) : 0;
    }, [carts]);

    const handleClick = async () => {
        setLoading(true);
        const toOrderCreate: OrderCreate = {
            totalAmount: totalPrice,
            orderItems: carts.map(e => ({
                productId: e.id,
                quantity: e.quantity
            }))
        };
        try {
            await createOrder(toOrderCreate);
            reset();
            router.push("/order");
        } catch (error) {
            toast({
                title: "ERROR",
                description: report(error),
                duration: 2 * 1000,
                variant: "destructive"
            })
        } finally {
            setLoading(false);
        }

    };
    return (
        <div className="flex flex-col  gap-5 h-full">
            <h1 className="text-[2rem] font-bold mb-5">Summary</h1>
            <Separator className="bg-gray-300" />
            <div className=" font-normal text-sm flex flex-row justify-between">
                <p>Subtotal</p>
                <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex font-normal text-sm flex-row justify-between">
                <p>Vat 32%</p>
                <span>{formatPrice((totalPrice * 0.32))}</span>
            </div>
            <Separator className="bg-gray-300" />

            <div className="flex font-normal text-sm flex-row justify-between">
                <p>Total</p>
                <span>{formatPrice(totalPrice + (totalPrice * 0.32))}</span>
            </div>

            <Separator className="bg-gray-300" />
            <Button
                onClick={handleClick}
                disabled={loading}
            >
                <svg
                    className={cn("animate-spin h-10 w-10 text-primary/2", loading ? "block" : "hidden")}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >

                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z"
                    />
                </svg>
                Go to checkout
            </Button>
        </div>
    );
};

export default CartSummary;