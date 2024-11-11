"use client";

import { Order } from "@/lib/typing/order";
import { EachElement } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

interface OrderTemplateProps {
  orders: Order[]
}
const OrderTemplate = ({ orders }: OrderTemplateProps) => {
  const navigate = useRouter();
  const handleClick = (id:string) => {
    navigate.push(`/order/${id}`);
  }
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">Orders</h1>
      <EachElement
        of={orders}
        render={(item) => {
          return (
            <div className="border rounded-md flex flex-col gap-3 p-5 cursor-pointer hover:bg-gray-50" onClick={() => handleClick(item.id)}>
              <p>Order id : {item.id}</p>
              <p>Created at : {new Date(item.createdAt).toDateString()}</p>
              <p>Payment status : {item.orderStatus}</p>
              <p>Total : {item.totalAmount.toFixed(2)}</p>
            </div>
          )
        }} 
      />
    </div>
  );
}

export default OrderTemplate;