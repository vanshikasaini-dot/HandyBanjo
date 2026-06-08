import axiosInstance from "./Interceptor/axiosInstance";


export const getAllCustomer = async (
  page,
  limit,
  status,
  search
) => {
  const response = await axiosInstance.get(
    `/dashboard/customers?page=${page}&limit=${limit}&status=${status}&search=${search}`
  );

  return response.data;
};