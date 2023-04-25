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
import { FaUserCheck, FaUserTie } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";

function Sidebar() {
  const currentPath = useLocation().pathname;
  if (
    currentPath === "/" ||
    currentPath === "/about" ||
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
            src={process.env.PUBLIC_URL + "/Assets/LMS.svg"}
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
          <NavLink to={"/admin/about"}>
            <BiUser className={classes.icons} size={25} />
            <b></b>
            <u></u>
            <span>About</span>
          </NavLink>
          <NavLink to={"/admin/kids"}>
            <FaUserCheck className={classes.icons} size={25} />
            <b></b>
            <u></u>
            <span>Kids</span>
          </NavLink>
          <NavLink to={"/admin/team"}>
            <FaUserTie className={classes.icons} size={25} />
            <b></b>
            <u></u>
            <span>Team</span>
          </NavLink>
        </div>

        <div className={classes.setting}>
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
