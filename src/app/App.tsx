import '../App.css'
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home.tsx";
import UserPages from "../pages/user/UserPages.tsx";

function App() {
  return (
      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/user/*"} element={<UserPages />} />
      </Routes>
  )
}

export default App
