import axiosInstance from "./Interceptor/axiosInstance";

export const getAllCategories = async () => {
  return axiosInstance.get(`/category/all`);
};
export const createCategory = async (data) => {
  const response = await axiosInstance.post("/category/add", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const deleteCategory = async (id) => {
  const response = await axiosInstance.delete(`/category/delete/${id}`);
  return response.data;
};

export const updateCategory = async (id, formData) => {
  const response = await axiosInstance.put(
    `/category/update/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

