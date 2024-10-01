"use client";
import { useStoreCart } from "@/lib/hooks/store-cart";
import { EachElement, formatPrice, totalPrice } from "@/lib/utils";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/modules/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/modules/components/ui/table";
import ImageProvider from "@/providers/image-provider";
import { Trash2 } from "lucide-react";
import React from "react";

const CartTable = () => {
    const { cart: carts, setQuantity } = useStoreCart();
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[300px]">Item.</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <EachElement
                    of={carts}
                    render={(cart) => {
                        return (
                            <TableRow key={cart.id} className="hover:bg-gray-200 broder-b-gray-200">
                                <TableCell className="font-medium flex flex-row gap-2 items-center">
                                    <div className="relative w-24 h-24">
                                        <ImageProvider fill className="object-cover rounded-md" src={cart.productImages[0].source} />
                                    </div>
                                    <p>{cart.nameTH}</p>
                                </TableCell>
                                <TableCell className="">
                                    <div className="flex flex-row gap-2 items-center">
                                        <Trash2 />
                                        <Select defaultValue={cart.quantity.toString()} onValueChange={(v) => {
                                            setQuantity(cart.id, Number(v));
                                        }} >
                                            <SelectTrigger className="w-[60px] focus:ring-0 focus-visible:ring-0 focus:ring-offset-0">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <EachElement
                                                        of={Array.from(Array(cart.stock.quantity).keys().map(i => i + 1))}
                                                        render={(i) => {
                                                            return <SelectItem value={i.toString()}>{i}</SelectItem>;
                                                        }}
                                                    />
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </TableCell>
                                <TableCell>{cart.price}</TableCell>
                                <TableCell className="text-right">{formatPrice(totalPrice(cart.price, cart.productOptions) * cart.quantity)}</TableCell>
                            </TableRow>
                        );
                    }}
                />
            </TableBody>
        </Table>
    );
};

export default CartTable;