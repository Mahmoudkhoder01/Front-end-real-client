import { Routes, Route } from "react-router-dom";
import DashboardRoutes from "./Pages/Dashboard/DashboardRoutes/DashboardRoutes";
import Login from "./Pages/Dashboard/Login/Login";

function App() {
  return (
    <Routes>
      <Route exact path="*" element={<DashboardRoutes />} />
      {/* <Route path="/admin" element={<Website />} /> */}
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
