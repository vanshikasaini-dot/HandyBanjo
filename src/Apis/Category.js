import axiosInstance from "./Interceptor/axiosInstance";

export const getAllCategories = async () => {
    const response = await axiosInstance.get("/category/all");
    return response.data;
};

export const createCategory = async (data) => {
    const response = await axiosInstance.post("/category/add", data);
    return response.data;
};
export const deleteCategory = async (id) => {
  const response = await axiosInstance.delete(`/category/delete/${id}`);
  return response.data;
};

export const updateCategory = async (id, formData) => {
  const response = await axiosInstance.put(
    `/category/update/${id}`,
    formData
  );
  return response.data;
};