import axiosInstance from "./Interceptor/axiosInstance";

export const getAllCustomer = async (page = 1, limit = 10) => {
  const response = await axiosInstance.get(
    `/dashboard/customers?page=${page}&limit=${limit}`
  );

  return response.data;
};