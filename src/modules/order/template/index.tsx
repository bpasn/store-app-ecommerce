"use client";

import { Order } from "@/lib/typing/order";
import { X } from "lucide-react";
import Link from "next/link";
import OrderDetails from "../components/order-detail";
import Items from "../components/items";
import ShippingDetails from "../components/shipping-detail";
import Help from "../components/help";
import OrderSummary from "../components/order-summary";

interface OrderTemplateProps {
    orders: Order[]
}
const OrderTemplate = ({ orders }: OrderTemplateProps) => {
    console.log(orders)
    return (
        <div>
            <div className="flex flex-col justify-center gap-y-4">
      <div className="flex gap-2 justify-between items-center">
        <h1 className="text-2xl-semi">Order details</h1>
        <Link
          href="/account/orders"
          className="flex gap-2 items-center text-ui-fg-subtle hover:text-ui-fg-base"
          data-testid="back-to-overview-button"
        >
          <X /> Back to overview
        </Link>
      </div>
      <div
        className="flex flex-col gap-4 h-full bg-white w-full"
        data-testid="order-details-container"
      >
        <OrderDetails orders={orders} showStatus />
        <Items />
        <ShippingDetails />
        <OrderSummary />
        <Help />
      </div>
    </div>
        </div>
    );
}

export default OrderTemplate;