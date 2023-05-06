import { Routes, Route } from "react-router-dom";
import DashboardRoutes from "./Pages/Dashboard/DashboardRoutes/DashboardRoutes";
import Login from "./Pages/Dashboard/Login/Login";
import { UserContext } from "./userContext";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import PrivateRoute from "./Pages/Dashboard/privateRoutes";
import Home from "./Pages/Home/Home";

function App() {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = Cookies.get("token");
    if (authToken) {
      setToken(authToken);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{ token, isLoggedIn, setToken, setIsLoggedIn }}
      >
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route exact path="*" element={<DashboardRoutes />} />
          </Route>
          {/* <Route path="/admin" element={<Website />} /> */}

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
