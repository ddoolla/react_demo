import {Route, Routes} from "react-router-dom";
import UserListPage from "../pages/user/UserListPage.tsx";
import UserPage from "../pages/user/UserPage.tsx";
import UserCreatePage from "../pages/user/UserCreatePage.tsx";
import UserEditPage from "../pages/user/UserEditPage.tsx";

const UserRoutes = () => {
    return(
        <Routes>
            <Route index element={<UserListPage />} />
            <Route path={":id"} element={<UserPage />} />
            <Route path={"form"} element={<UserCreatePage />} />
            <Route path={":id/edit"} element={<UserEditPage />} />
        </Routes>
    )
}

export default UserRoutes;