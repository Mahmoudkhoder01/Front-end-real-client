import { Routes, Route } from "react-router-dom";
import Classes from "./dashboard.module.css";
// import pages
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Events from "../Events/Event";
import About from "../About/About";
import Kids from "../Kids/Kids";
import Team from "../Team/Team";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import login from "../Login/Login";

function DashboardRoutes() {
  return (
    <div className={Classes.App}>
      <div className={Classes.AppSidebar}>
        <Sidebar />
      </div>
      <div className={Classes.AppContainer}>
        <Routes>
          <Route exact path="/admin/services" element={<Services />} />
          <Route path="/admin/projects" element={<Projects />} />
          <Route path="/admin/events" element={<Events />} />
          <Route path="/admin/about" element={<About />} />
          <Route path="/admin/kids" element={<Kids />} />
          <Route path="/admin/team" element={<Team />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashboardRoutes;
