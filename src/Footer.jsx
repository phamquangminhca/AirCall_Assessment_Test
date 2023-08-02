import React from "react";
import { BiSolidPhone } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { Bs0Circle } from "react-icons/bs";
import { IoIosKeypad } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";


const Footer = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const footerStyles = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "60px",
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const circleIconStyles = {
    width: "68px",
    height: "68px",
    borderRadius: "50%",
    backgroundColor: "white", 
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    cursor: "pointer",
    top: "-19px", 
    zIndex: 1, 
  };

  const regularIconStyles = {
    width: "32px",
    height: "32px",
    fontSize: "1.8rem",
    cursor: "pointer",
    color: "#48c424",
    margin: "0 22px", 
  };

  const iconContainerStyles = {
    display: "flex",
    alignItems: "center",
    width: "100%", 
    justifyContent: "space-between",
  };

  const innerCircleStyles = {
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    backgroundColor: "#48c424",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", 
  };

  return (
    <footer style={footerStyles}>
      <div style={iconContainerStyles}>
        <Link to='/' style={{
          width: "32px",
          height: "32px",
          fontSize: "1.8rem",
          cursor: "pointer",
          color: isActive("/") ? "#333333" : "#999999",
          margin: "0 22px",
          borderBottom: isActive("/") ? "2px solid #48c424" : "none", 
        }}>
          <BiSolidPhone />
        </Link>
        <Link to='/profile' style={{
          width: "32px",
          height: "32px",
          fontSize: "1.8rem",
          cursor: "pointer",
          color: isActive("/profile") ? "#333333" : "#999999",
          margin: "0 22px", 
          borderBottom: isActive("/profile") ? "2px solid #48c424" : "none",
        }}>
          <FiUser />
        </Link>
        <Link to='/keypad' style={circleIconStyles}>
          <div style={innerCircleStyles}>
            <IoIosKeypad style={{ fontSize: "2.2rem" }} />
          </div>
        </Link>
        <Link to='/setting' style={{
          width: "32px",
          height: "32px",
          fontSize: "1.8rem",
          cursor: "pointer",
          color: isActive("/setting") ? "#333333" : "#999999",
          margin: "0 22px", 
          borderBottom: isActive("/setting") ? "2px solid #48c424" : "none",
        }}>
          <FiSettings />
        </Link>
        <Link to='/location' style={{
          width: "32px",
          height: "32px",
          fontSize: "1.8rem",
          cursor: "pointer",
          color: isActive("/location") ? "#333333" : "#999999",
          margin: "0 22px", 
          borderBottom: isActive("/location") ? "2px solid #48c424" : "none",
        }}>
          <Bs0Circle />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
