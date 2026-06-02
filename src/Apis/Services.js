import axiosInstance from "./Interceptor/axiosInstance";

export const getAllEnterprises = async () => {
  const response = await axiosInstance.get("/enterprise/all");
  return response.data;
};