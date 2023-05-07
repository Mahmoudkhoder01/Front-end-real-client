import React from "react";
import styles from "./footer.module.css";
import { useLocation } from "react-router-dom";
import logo from "../../Assets/Images/dashboardLogo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const currentPath = useLocation().pathname;
  if (
    currentPath === "/admin/users" ||
    currentPath === "/admin/about" ||
    currentPath === "/admin/kids" ||
    currentPath === "/admin/projects" ||
    currentPath === "/admin/emails" ||
    currentPath === "/admin/events" ||
    currentPath === "/admin/team" ||
    currentPath === "/login" ||
    currentPath === "/admin/services"
  )
    return null;
    
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.socialMedia}>
            <a href="https://www.facebook.com/topdesignshd">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/topdesignshd/">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/topdesignshd">
              <FaTwitter />
            </a>
            <a href="https://www.tiktok.com/@topdesignshd">
              <FaTiktok />
            </a>
            <a href="https://www.youtube.com/@topdesignshd8027">
              <FaYoutube />
            </a>
          </div>
          <div className={styles.copyright}>
            <p>Copyright &#169; - 2023 Topdesign&#174;. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
