import axiosInstance from "./Interceptor/axiosInstance";

export const getAllPro = async (page = 1, limit = 10) => {
    const response = await axiosInstance.get(
        `/dashboard/pros?page=${page}&limit=${limit}`
    );

    return response.data;
};

export const getAllProFilter = async (page, limit, category = "", search = "") => {
    let url = `/dashboard/pros?page=${page}&limit=${limit}`;

    if (category) url += `&category=${category}`;
    if (search) url += `&search=${search}`;

    const response = await axiosInstance.get(url);
    return response.data;
};