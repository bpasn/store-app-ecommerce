"use server"
import { ApiRouter } from "../constant";
import { CategoryWithProduct } from "../typing/category";
import {  delay, report } from "../utils";
import { axiosInstance } from "../utils/axios-instance";

export const getProduct = async (): Promise<CategoryWithProduct[]> => {
    try {
        const { data } = await axiosInstance.get<ApiResponse<CategoryWithProduct[]>>(ApiRouter.PRODUCT);
        return data.payload;
    } catch (error) {
        console.log(error)
        throw new Error(report(error));
    }
};

export const getCategories = async (): Promise<ProductCategoryModal[]> => {
    try {
        const { data } = await axiosInstance.get<ApiResponse<ProductCategoryModal[]>>(ApiRouter.PRODUCT);
        await delay(2);
        return data.payload;
    } catch (error) {
        throw new Error(report(error));
    }
};