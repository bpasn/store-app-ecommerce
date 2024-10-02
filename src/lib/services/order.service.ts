"use server";

import { ApiRouter } from "../constant";
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
        await axiosInstance().post(ApiRouter.ORDER, order, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        throw new Error(report(error));
    }
};

export const getOrders = async () => {
    try {
        const { data } = await axiosInstance().get(ApiRouter.ORDER);
    } catch (error) {
        throw new Error(report(error));
    }
}