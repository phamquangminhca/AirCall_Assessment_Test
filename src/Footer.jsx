import React from "react";
import { BiSolidPhone } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { Bs0Circle } from "react-icons/bs";
import { IoIosKeypad } from "react-icons/io";

const Footer = () => {
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
    margin: "0 8px", 
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
        <div style={regularIconStyles}>
          <BiSolidPhone />
        </div>
        <div style={regularIconStyles}>
          <FiUser />
        </div>
        <div style={circleIconStyles}>
          <div style={innerCircleStyles}>
            <IoIosKeypad style={{ fontSize: "2.2rem" }} />
          </div>
        </div>
        <div style={regularIconStyles}>
          <FiSettings />
        </div>
        <div style={regularIconStyles}>
          <Bs0Circle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
