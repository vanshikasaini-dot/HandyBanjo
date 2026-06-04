import axiosInstance from "./Interceptor/axiosInstance";

export const getAllPro = async (page = 1, limit = 10) => {
    const response = await axiosInstance.get(
        `/dashboard/pros?page=${page}&limit=${limit}`
    );

    return response.data;
};