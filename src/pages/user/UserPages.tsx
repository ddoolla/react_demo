import {Route, Routes} from "react-router-dom";
import UserListPage from "./UserListPage.tsx";
import UserDetailPage from "./UserDetailPage.tsx";
import UserForm from "../../features/user/ui/UserForm.tsx";
import {useAppDispatch} from "../../app/withTypes.ts";
import {useEffect} from "react";
import {fetchUsers} from "../../features/user/userSlice.ts";

const UserPages = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

    return(
        <Routes>
            <Route path={"list"} element={<UserListPage />} />
            <Route path={":id"} element={<UserDetailPage />} />
            <Route path={"form"} element={<UserForm />} />
        </Routes>
    )
}

export default UserPages;