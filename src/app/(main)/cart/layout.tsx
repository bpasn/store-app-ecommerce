import { Metadata } from "next";
import React from "react";


export const metadata:Metadata = {
    title:"Cart",
    description:"Cart page"
}
const CartLayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (<>{children}</>);
}

export default CartLayout;