import { Fragment } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

// Import Css Files
import classes from "./Sidebar.module.css";
import "./active.css";

// Impport Icons
import { MdOutlineClass } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { HiTableCells } from "react-icons/hi2";
import { BiUser } from "react-icons/bi";
import { TbMoodKid } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlineMail, AiOutlineTeam } from "react-icons/ai";

// Import Logo
import logo from "../../Assets/Images/dashboardLogo.svg"
import Cookies from "js-cookie";

function Sidebar() {
  const currentPath = useLocation().pathname;
  if (
    currentPath === "/" ||
    currentPath === "/users" ||
    currentPath === "/events" ||
    currentPath === "/kids" ||
    currentPath === "/projects" ||
    currentPath === "/team" ||
    currentPath === "/services"
  )
    return null;

  return (
    <Fragment>
      <nav className={classes.sidebar}>
        <div>
          <img
            className={classes.logo}
            src={logo}
            alt="SVG Logo"
          />
        </div>

        <div className={classes.bar}>
          <NavLink to={"/admin/services"}>
            <RxDashboard className={classes.icons} size={25} />
            <b></b>
            <u></u>
            <span>Services</span>
          </NavLink>
          <NavLink to={"/admin/projects"}>
            <MdOutlineClass className={classes.icons} size={25} />
            <b></b>
            <u></u>
            <span>Projects</span>
          </NavLink>
          <NavLink to={"/admin/events"}>
            <HiTableCells className={classes.icons} size={25} />
            <b></b>
            <u></u>
            <span>Events</span>
          </NavLink>
          <NavLink to={"/admin/users"}>
            <BiUser className={classes.icons} size={25} />
            <b></b>
            <u></u>
            <span>Admins</span>
          </NavLink>
          <NavLink to={"/admin/kids"}>
            <TbMoodKid className={classes.icons} size={25} />
            <b></b>
            <u></u>
            <span>Kids</span>
          </NavLink>
          <NavLink to={"/admin/team"}>
            <AiOutlineTeam className={classes.icons} size={25} />
            <b></b>
            <u></u>
            <span>Team</span>
          </NavLink>
          <NavLink to={"/admin/emails"}>
            <AiOutlineMail className={classes.icons} size={25} />
            <b></b>
            <u></u>
            <span>Emails</span>
          </NavLink>
        </div>

        <div className={classes.setting} onClick={async()=> {await Cookies.remove("token")}}>
          <Link to={"/"}>
            <HiOutlineLogout size={30} className={classes.logOut} />
            <span>Logout</span>
          </Link>
        </div>
      </nav>
    </Fragment>
  );
}

export default Sidebar;
