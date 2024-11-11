"use server";

import { AxiosError } from "axios";
import { ApiRouter } from "../constant";
import { report } from "../utils";
import { Order } from "../typing/order";
import { axiosInstance } from "../utils/axios-instance";
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
        await axiosInstance.post(ApiRouter.ORDER, order, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response?.data) {
                throw new Error(error.response.data.message);
            }
        }
        throw new Error(report(error));
    }
};

export const getOrders = async (): Promise<Order[]> => {
    try {
        const { data } = await axiosInstance.get<ApiResponse<Order[]>>(ApiRouter.ORDER);
        console.log({ data })
        return data.payload;
    } catch (error) {
        throw new Error(report(error));
    }
}

export const getOrderById = async (id: string) => {
    try {
        const { data } = await axiosInstance.get<ApiResponse<Order>>(ApiRouter.ORDER + `/${id}`);
        return data.payload;
    } catch (error) {
        throw new Error(report(error));
    }
}