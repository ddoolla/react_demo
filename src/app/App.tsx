import '../App.css'
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home.tsx";
import UserRoutes from "../pages/user/UserRoutes.tsx";

function App() {
  return (
      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/user/*"} element={<UserRoutes />} />
      </Routes>
  )
}

export default App
