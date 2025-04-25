import {Routes, Route} from "react-router-dom";
import MuiTestPage from "./MuiTestPage.tsx";
import BoxPage from "./layout/BoxPage.tsx";

const MuiRoutes = () => {
    return (
        <Routes>
            <Route path={"test"} element={<MuiTestPage />} />
            <Route path={"layout/box"} element={<BoxPage />} />
        </Routes>
    )
}

export default MuiRoutes

