// src/Apis/enterprise.js

import axiosInstance from "./Interceptor/axiosInstance";

export const getAllEnterprises = async () => {
  const response = await axiosInstance.get("/dashboard/enterprises");
  return response.data;
};


export const getEnterpriseById = async (id) => {
  const response = await axiosInstance.get(`/enterprise/getById/${id}`);
  return response.data;
};

export const deleteEnterprise = async (id) => {
  const response = await axiosInstance.delete(`/enterprise/deleteById/${id}`);
  return response.data;
};

export const updateEnterprise = async (id, data) => {
  const response = await axiosInstance.put(
    `/enterprise/updateById/${id}`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};