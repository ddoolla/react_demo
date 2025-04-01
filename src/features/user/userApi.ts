import axiosInstance from "../../app/config/axiosConfig.ts";

export const fetchUsersApi = async () => {
    const response = await axiosInstance.get("/users");
    return response.data;
}

