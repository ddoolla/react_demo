import '../App.css'
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home.tsx";
import UserListPage from "../pages/user/UserListPage.tsx";

function App() {

  return (
      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/user/list"} element={<UserListPage />} />
      </Routes>
  )
}

export default App
