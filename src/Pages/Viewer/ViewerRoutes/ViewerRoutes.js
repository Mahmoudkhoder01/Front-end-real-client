import { Routes, Route } from "react-router-dom";
// import pages
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Events from "../Events/Events";
import Home from "../Home/Home";

function ViewerRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
}

export default ViewerRoutes;
