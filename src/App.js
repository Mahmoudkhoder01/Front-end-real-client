import { Routes, Route } from "react-router-dom";
import DashboardRoutes from "./Pages/Dashboard/DashboardRoutes/DashboardRoutes";
import Login from "./Pages/Dashboard/Login/Login";
import { UserContext } from "./userContext";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import PrivateRoute from "./Pages/Dashboard/privateRoutes";
import Home from "./Pages/Viewer/Home/Home";
import Services from "./Pages/Viewer/Services/Services";
import Events from "./Pages/Viewer/Events/Events";
import Projects from "./Pages/Viewer/Projects/Projects";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Pages/Viewer/Contact/Contact";
import About from "./Pages/Viewer/About/About";
import Footer from "./Components/Footer/Footer";

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
      <Navbar />
      <UserContext.Provider
        value={{ token, isLoggedIn, setToken, setIsLoggedIn }}
      >
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route exact path="*" element={<DashboardRoutes />} />
          </Route>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/kids-zone" element={<Events />} />
          <Route path="/achievements" element={<Events />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
