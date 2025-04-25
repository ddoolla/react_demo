import '../App.css'
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home.tsx";
import UserRoutes from "../pages/user/UserRoutes.tsx";
import MuiRoutes from "../pages/mui-test/MuiRoutes.tsx";

function App() {
  return (
      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/user/*"} element={<UserRoutes />} />
          <Route path={"/mui/*"} element={<MuiRoutes />} />
      </Routes>
  )
}

export default App
