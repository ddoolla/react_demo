import '../App.css'
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home.tsx";
import UserList from "../pages/user/UserList.tsx";


function App() {

  return (
      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/user/list"} element={<UserList />} />
      </Routes>
  )
}

export default App
