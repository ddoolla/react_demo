import {Route, Routes} from "react-router-dom";
import UserListPage from "./UserListPage.tsx";
import UserPage from "./UserPage.tsx";
import UserForm from "../../features/user/ui/UserForm.tsx";

const UserRoutes = () => {
    return(
        <Routes>
            <Route path={"list"} element={<UserListPage />} />
            <Route path={":id"} element={<UserPage />} />
            <Route path={"form"} element={<UserForm />} />
        </Routes>
    )
}

export default UserRoutes;