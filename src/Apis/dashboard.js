import axiosInstance from "./Interceptor/axiosInstance";

export const getAllDashboard = async () => {
  const response = await axiosInstance.get("dashboard/all");
  return response.data;
};