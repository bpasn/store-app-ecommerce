import { Order } from "@/lib/typing/order";
import React from "react";

interface OrderDetailsProps {
    showStatus?: boolean;
    orders: Order[]
}
const OrderDetails = ({
    orders,
    showStatus
}: OrderDetailsProps) => {
    return (
        <div>
            <h1>
                We have sent the order confirmation details to{" "}
                <span className="text-ui-fg-medium-plus font-semibold" data-testid="order-email">
                    {/* {order.email} */}
                </span>
                .
            </h1>
            <h2 className="mt-2">
                {/* Order date: <span data-testid="order-date">{new Date(order.created_at).toDateString()}</span> */}
            </h2>
            <h3 className="mt-2 text-ui-fg-interactive">
                {/* Order number: <span data-testid="order-id">{order.display_id}</span> */}
            </h3>

            <div className="flex items-center text-compact-small gap-x-4 mt-4">
                {showStatus && (
                    <React.Fragment>
                        <h1>
                            Order status:{" "}
                            <span className="text-ui-fg-subtle " data-testid="order-status">
                                {/* {formatStatus(order.fulfillment_status)} */}
                            </span>
                        </h1>
                        <h1>
                            Payment status:{" "}
                            <span className="text-ui-fg-subtle">
                                {/* {formatStatus(order.payment_status)} */}
                            </span>
                        </h1>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
}

export default OrderDetails;