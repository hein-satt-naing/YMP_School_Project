import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TestPage from "./pages/TestPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import ProfilePage from "./pages/ProfilePage";
import SideBar from "./components/SideBar";

function App () {
  return (
    
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/sidebar" element={<SideBar />}></Route>
    </Routes>
  );
}
export default App;