"use server"
import {  report } from "../utils";
import { axiosInstance } from "../utils/axios-instance";

export const loadingPage = async ():Promise<{}> => {
    try {
        const {data} = await axiosInstance.get<ApiResponse<{}>>("/initial-page");
        return data.payload;
    } catch (error) {
        throw new Error(report(error));
    }
}