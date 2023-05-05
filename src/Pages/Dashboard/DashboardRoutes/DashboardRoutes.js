import { Routes, Route } from "react-router-dom";
import Classes from "./dashboard.module.css";
// import pages
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Events from "../Events/Event";
import Users from "../Users/Users";
import Kids from "../Kids/Kids";
import Team from "../Team/Team";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import login from "../Login/Login";
import Email from "../Emails/email";
import PrivateRoute from "../privateRoutes";
import About from "../About/About";

function DashboardRoutes() {
  return (
    <div className={Classes.App}>
      <div className={Classes.AppSidebar}>
        <Sidebar />
      </div>
      <div className={Classes.AppContainer}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route exact path="/admin/services" element={<Services />} />
            <Route path="/admin/projects" element={<Projects />} />
            <Route path="/admin/events" element={<Events />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/about" element={<About />} />
            <Route path="/admin/kids" element={<Kids />} />
            <Route path="/admin/team" element={<Team />} />
            <Route path="/admin/emails" element={<Email />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default DashboardRoutes;
