
import axiosInstance from "./Interceptor/axiosInstance";

// Login API
export const loginUser = async (userData) => {
    const response = await axiosInstance.post(
        "/login",
        userData
    );
    return response.data;
};