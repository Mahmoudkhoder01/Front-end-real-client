// import { Routes, Route } from "react-router-dom";
// import DashboardRoutes from "./Pages/Dashboard/DashboardRoutes/DashboardRoutes";
// import Login from "./Pages/Dashboard/Login/Login";
// import { UserContext } from "./userContext";
// import { useState } from "react";
import TeamCard from "./Components/TeamSection/TeamCard.js";
import TeamSection from "./Components/TeamSection/TeamSection.js";



function App() {

  // const [token, setToken] = useState(null)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <>
      {/* <UserContext.Provider value={{ token, isLoggedIn, setToken, setIsLoggedIn }}>
        <Routes>
          <Route exact path="*" element={<DashboardRoutes />} />
          <Route path="/admin" element={<Website />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </UserContext.Provider> */}
      <TeamSection />
    </>
  );
}

export default App;
