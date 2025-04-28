import {Routes, Route} from "react-router-dom";
import MuiTestPage from "../pages/mui-test/MuiTestPage.tsx";
import BoxPage from "../pages/mui-test/layout/BoxPage.tsx";

const MuiRoutes = () => {
    return (
        <Routes>
            <Route path={"test"} element={<MuiTestPage />} />
            <Route path={"layout/box"} element={<BoxPage />} />
        </Routes>
    )
}

export default MuiRoutes

