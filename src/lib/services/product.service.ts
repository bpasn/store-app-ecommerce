import { ApiRouter } from "../constant";
import { axiosInstance, report } from "../utils";

export const getProduct = async (): Promise<ProductModal[]> => {
    try {
        const { data } = await axiosInstance().get<ApiResponse<ProductModal[]>>(ApiRouter.PRODUCT);
        return data.payload;
    } catch (error) {
        throw new Error(report(error));
    }
};