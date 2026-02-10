import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TestPage from "./pages/TestPage";

function App () {
  return (
    
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
}
export default App;