"use server"
import { ApiRouter } from "../constant";
import { axiosInstance, delay, report } from "../utils";

export const getProduct = async (): Promise<ProductModal[]> => {
    try {
        const { data } = await axiosInstance().get<ApiResponse<ProductModal[]>>(ApiRouter.PRODUCT);
        await delay(2 * 1000);
        return data.payload;
    } catch (error) {
        throw new Error(report(error));
    }
};