"use server";

import { AxiosError } from "axios";
import { ApiRouter } from "../constant";
import { axiosInstance, report } from "../utils";
import { Order } from "../typing/order";
export interface OrderItem {
    productId: string;
    quantity: number;
    options: {
        id: string;
        choices: string[]
    }[];
}
export interface OrderCreate {
    totalAmount: number;
    orderStatus: "PENDING" | "CLOSE" | "DONE"
    orderItems: OrderItem[];
}
export const createOrder = async (order: OrderCreate) => {
    try {
        await axiosInstance().post(ApiRouter.ORDER, order, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log(error.response?.data)
        }
        throw new Error(report(error));
    }
};

export const getOrders = async (): Promise<Order[]> => {
    try {
        const { data } = await axiosInstance().get<ApiResponse<Order[]>>(ApiRouter.ORDER);
        return data.payload;
    } catch (error) {
        throw new Error(report(error));
    }
}