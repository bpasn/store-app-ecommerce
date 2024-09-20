import { clsx, type ClassValue } from "clsx";
import { Children } from "react";
import { twMerge } from "tailwind-merge";
import BaseException from "./error";
import axios, { AxiosError } from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const EachElement = <T>({ of, render }: { of: T[]; render: (item: T, index: number) => React.JSX.Element; }) => Children.toArray(of.map(render));


export const report = (error: any) => {
  if (error instanceof AxiosError) {
    return error.response?.data.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "Internal server error";
};


export const axiosInstance = () => {
  const instance = axios.create({
    baseURL: process.env.API_URI,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "x-api-key": process.env.X_API_KEY
    }
  });
  return instance;
};

export const delay = async (duration: number) => new Promise(resolve => setTimeout(resolve, duration));