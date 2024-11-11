import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.API_URI,
    timeout: 5 * 1000,
    timeoutErrorMessage:"Exception timeout",
    headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
        "x-api-key": process.env.X_API_KEY
    }
});


export {
    axiosInstance
}