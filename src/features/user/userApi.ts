import axiosInstance from "../../app/config/axiosConfig.ts";
import {NewUser} from "./user.ts";

export const fetchUsersApi = async () => {
    const response = await axiosInstance.get("/users");
    return response.data;
}

export const fetchUserByIdApi = async (id: number) => {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
}

export const createUserApi = async (initialUser: NewUser) => {
    const response = await axiosInstance.post("/users", initialUser)
    return response.data;
}
