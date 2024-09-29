import { clsx, type ClassValue } from "clsx";
import { Children } from "react";
import { twMerge } from "tailwind-merge";
import BaseException from "./error";
import axios, { AxiosError } from "axios";
import { OptionChoiceCart } from "./hooks/store-cart";

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


export const totalPrice = (price: number, option: OptionChoiceCart[]) => {
  const total = option.reduce((prv, cur) => {
    return prv + cur.choices.reduce((p, c) => p + c.price, 0);
  }, price);
  return total;
};

export const formatPrice = (totalPrice:number) => {
  const formatPrice = new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(totalPrice);
  return formatPrice;
}