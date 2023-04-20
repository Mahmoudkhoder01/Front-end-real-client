import { Routes, Route } from "react-router-dom";

// import pages
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Events from "../Events/Event";
import About from "../About/About";
import Kids from "../Kids/Kids";
import Team from "../Team/Team";
import Sidebar from "../../../Components/Sidebar/Sidebar";

function DashboardRoutes() {
  return (
    <div className="App">
      <div className="App-sidebar">
        <Sidebar />
      </div>
      <div className="App-container">
        <Routes>
          <Route exact path="/sevice" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashboardRoutes;
