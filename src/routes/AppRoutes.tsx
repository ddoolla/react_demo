import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.tsx";
import UserListPage from "../pages/user/UserListPage.tsx";
import UserPage from "../pages/user/UserPage.tsx";
import UserCreatePage from "../pages/user/UserCreatePage.tsx";
import UserEditPage from "../pages/user/UserEditPage.tsx";
import MuiHomePage from "../pages/mui-ex/MuiHomePage.tsx";
import BoxEx from "../features/ex-mui/layout/BoxEx.tsx";
import RhfEx01 from "../features/ex-react-hook-form/RhfEx01.tsx";
import RhfHomePage from "../pages/react-hook-form-ex/RhfHomePage.tsx";
import RhfEx02 from "../features/ex-react-hook-form/RhfEx02.tsx";
import RhfEx03 from "../features/ex-react-hook-form/RhfEx03.tsx";
import RhfEx04 from "../features/ex-react-hook-form/RhfEx04.tsx";
import RhfEx05 from "../features/ex-react-hook-form/RhfEx05.tsx";
import RhfEx06 from "../features/ex-react-hook-form/RhfEx06.tsx";
import RhfEx07 from "../features/ex-react-hook-form/RhfEx07.tsx";
import RhfEx08 from "../features/ex-react-hook-form/RhfEx08.tsx";
import RhfExPage from "../pages/react-hook-form-ex/RhfExPage.tsx";
import MuiExPage from "../pages/mui-ex/MuiExPage.tsx";
import RhfEx09 from "../features/ex-react-hook-form/RhfEx09.tsx";
import RhfEx10 from "../features/ex-react-hook-form/RhfEx10.tsx";
import RhfEx11 from "../features/ex-react-hook-form/RhfEx11.tsx";

/**
 * 중첩 Route 쓸라면 상위 컴포넌트에 Outlet 있어야 함.
 */

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
                <Route path={"home"} element={<MuiHomePage />} />
                <Route path={"ex"} element={<MuiExPage />} >
                    <Route path={"layout/box"} element={<BoxEx />} />
                </Route>
            </Route>

            <Route path={"react-hook-form"}>
                <Route path={"home"} element={<RhfHomePage />} />
                <Route path={"ex"} element={<RhfExPage />} >
                    <Route path={"ex01"} element={<RhfEx01 />} />
                    <Route path={"ex02"} element={<RhfEx02 />} />
                    <Route path={"ex03"} element={<RhfEx03 />} />
                    <Route path={"ex04"} element={<RhfEx04 />} />
                    <Route path={"ex05"} element={<RhfEx05 />} />
                    <Route path={"ex06"} element={<RhfEx06 />} />
                    <Route path={"ex07"} element={<RhfEx07 />} />
                    <Route path={"ex08"} element={<RhfEx08 />} />
                    <Route path={"ex09"} element={<RhfEx09 />} />
                    <Route path={"ex10"} element={<RhfEx10 />} />
                    <Route path={"ex11"} element={<RhfEx11 />} />
                </Route>
            </Route>

        </Routes>
    )
}

export default AppRoutes;