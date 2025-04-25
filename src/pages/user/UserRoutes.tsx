import {Route, Routes} from "react-router-dom";
import UserListPage from "./UserListPage.tsx";
import UserPage from "./UserPage.tsx";
import UserCreatePage from "./UserCreatePage.tsx";
import UserEditPage from "./UserEditPage.tsx";

const UserRoutes = () => {
    return(
        <Routes>
            <Route path={"list"} element={<UserListPage />} />
            <Route path={":id"} element={<UserPage />} />
            <Route path={"form"} element={<UserCreatePage />} />
            <Route path={":id/edit"} element={<UserEditPage />} />
        </Routes>
    )
}

export default UserRoutes;