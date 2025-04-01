import '../App.css'
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home.tsx";
import UserListPage from "../pages/user/UserListPage.tsx";
import UserDetailPage from "../pages/user/UserDetailPage.tsx";
import UserForm from "../features/user/ui/UserForm.tsx";

function App() {

  return (
      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/user/list"} element={<UserListPage />} />
          <Route path={"/user/:id"} element={<UserDetailPage />} />
          <Route path={"/user/form"} element={<UserForm />} />
      </Routes>
  )
}

export default App
