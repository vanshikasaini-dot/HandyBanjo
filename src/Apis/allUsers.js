import axiosInstance from "./Interceptor/axiosInstance";

export const getAllUsers = async () => {
    const response = await axiosInstance.get("/dashboard/users");
    return response.data;
};