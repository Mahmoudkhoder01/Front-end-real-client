import { Routes, Route } from "react-router-dom";
import DashboardRoutes from "./Pages/Dashboard/DashboardRoutes/DashboardRoutes";
import Login from "./Pages/Dashboard/Login/Login";
import { UserContext } from "./userContext";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import PrivateRoute from "./Pages/Dashboard/privateRoutes";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Viewer/Services/Services";
import Events from "./Pages/Viewer/Events/Events";
import Projects from "./Pages/Viewer/Projects/Projects";

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
          <Route path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
