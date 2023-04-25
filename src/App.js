import { Routes, Route } from "react-router-dom";
import DashboardRoutes from "./Pages/Dashboard/DashboardRoutes/DashboardRoutes";

function App() {
  return (
    <Routes>
      <Route exact path="*" element={<DashboardRoutes />} />
      {/* <Route path="/admin" element={<Website />} /> */}
    </Routes>
  );
}

export default App;
