"use server";

import { ApiRouter } from "../constant";
import { CartStore } from "../hooks/store-cart";
import { axiosInstance, report } from "../utils";
export interface OrderCreate {
    totalAmount: number;
    orderItems: {
        productId: string;
        quantity: number;
    }[];
}
export const createOrder = async (order: OrderCreate) => {
    try {
        await axiosInstance().post(ApiRouter.ORDER, order,{
            headers:{
                "Content-Type":"application/json"
            }
        });
    } catch (error) {
        throw new Error(report(error));
    }
};