import { axiosInstance, report } from "../utils";

export const loadingPage = async ():Promise<{}> => {
    try {
        const {data} = await axiosInstance().get<ApiResponse<{}>>("/initial-page");
        return data.payload;
    } catch (error) {
        throw new Error(report(error));
    }
}