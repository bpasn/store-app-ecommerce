"use server"
import { ApiRouter } from "../constant";
import { axiosInstance, delay, report } from "../utils";

export const getProduct = async (): Promise<CategoryWithProduct[]> => {
    try {
        const { data } = await axiosInstance().get<ApiResponse<CategoryWithProduct[]>>(ApiRouter.PRODUCT + "/categories");
        await delay(2 * 1000);
        return data.payload;
    } catch (error) {
        throw new Error(report(error));
    }
};
export const getProductByCategory = async (category:string): Promise<ProductModal[]> => {
    try {
        const { data } = await axiosInstance().get<ApiResponse<ProductModal[]>>(ApiRouter.PRODUCT);
        await delay(2 * 1000);
        return data.payload;
    } catch (error) {
        throw new Error(report(error));
    }
};
export const getCategories = async (): Promise<ProductCategoryModal[]> => {
    try {
        const { data } = await axiosInstance().get<ApiResponse<ProductCategoryModal[]>>(ApiRouter.PRODUCT + "/categories");
        await delay(2 * 1000);
        return data.payload;
    } catch (error) {
        throw new Error(report(error));
    }
};