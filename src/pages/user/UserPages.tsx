import {Route, Routes} from "react-router-dom";
import UserListPage from "./UserListPage.tsx";
import UserDetailPage from "./UserDetailPage.tsx";
import UserForm from "../../features/user/ui/UserForm.tsx";

const UserPages = () => {
    return(
        <Routes>
            <Route path={"list"} element={<UserListPage />} />
            <Route path={":id"} element={<UserDetailPage />} />
            <Route path={"form"} element={<UserForm />} />
        </Routes>
    )
}

export default UserPages;