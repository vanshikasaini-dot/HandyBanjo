import axiosInstance from "./Interceptor/axiosInstance";

export const getAllHelpers = async () => {
  const response = await axiosInstance.get("/helper/all");
  return response.data;
};

export const getHelperById = async (id) => {
  const response = await axiosInstance.get(`/helper/getById/${id}`);
  return response.data;
};
export const deleteHelperById = async (id) => {
  const response = await axiosInstance.delete(`/helper/deleteById/${id}`);
  return response.data;
};

export const updateHelperById = async (id, data) => {
  const response = await axiosInstance.put(
    `/helper/updateById/${id}`,
    data
  );

  return response.data;
};