import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.tsx";
import UserRoutes from "./UserRoutes.tsx";
import MuiRoutes from "./MuiRoutes.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/users/*"} element={<UserRoutes />} />
            <Route path={"/mui/*"} element={<MuiRoutes />} />
        </Routes>
    )
}

export default AppRoutes;