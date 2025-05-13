import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.tsx";
import UserListPage from "../pages/user/UserListPage.tsx";
import UserPage from "../pages/user/UserPage.tsx";
import UserCreatePage from "../pages/user/UserCreatePage.tsx";
import UserEditPage from "../pages/user/UserEditPage.tsx";
import MuiTestPage from "../pages/mui-test/MuiTestPage.tsx";
import BoxPage from "../pages/mui-test/layout/BoxPage.tsx";
import RhfEx01 from "../features/react-hook-form/RhfEx01.tsx";
import RhfmEx01 from "../features/react-hook-form-mui/RhfmEx01.tsx";
import RhfTestPage from "../pages/react-hook-form/RhfTestPage.tsx";
import RhfmTestPage from "../pages/react-hook-form-mui/RhfmTestPage.tsx";
import RhfEx02 from "../features/react-hook-form/RhfEx02.tsx";
import RhfEx03 from "../features/react-hook-form/RhfEx03.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />

            <Route path={"users"}>
                <Route index element={<UserListPage />} />
                <Route path={":id"} element={<UserPage />} />
                <Route path={"form"} element={<UserCreatePage />} />
                <Route path={":id/edit"} element={<UserEditPage />} />
            </Route>

            <Route path={"mui"}>
                <Route path={"test"} element={<MuiTestPage />} />
                <Route path={"layout/box"} element={<BoxPage />} />
            </Route>

            <Route path={"react-hook-form"}>
                <Route path={"test"} element={<RhfTestPage />} />
                <Route path={"ex01"} element={<RhfEx01 />} />
                <Route path={"ex02"} element={<RhfEx02 />} />
                <Route path={"ex03"} element={<RhfEx03 />} />
            </Route>

            <Route path={"react-hook-form-mui"}>
                <Route path={"test"} element={<RhfmTestPage />} />
                <Route path={"ex01"} element={<RhfmEx01 />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;