import {Gender} from "../../common/constant/gender.ts";

export interface User {
    id: number;
    nickName: string;
    name: string;
    gender: Gender;
    hobby: string;
    createdAt: string
}

export interface NewUser {
    nickName: string;
    password: string;
    name: string;
    gender: Gender;
    hobby: string;
}
