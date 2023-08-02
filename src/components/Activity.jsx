import React, { useState } from "react";
import { SlCallIn } from "react-icons/sl";
import { SlCallOut } from "react-icons/sl";
import { PiDotsThreeVerticalLight } from "react-icons/pi";
import { Link } from "react-router-dom";

function Activity({
  direction,
  isArchived,
  from,
  to,
  via,
  createdDate,
  calledAt,
  id,
  archiveOneActivity,
  unarchiveOneActivity,
}) {
  const [time, amPm] = calledAt.split(" ");

  const [isArchiveBarVisible, setIsArchiveBarVisible] = useState(false);
  const handleThreeDotsClick = () => {
    setIsArchiveBarVisible(!isArchiveBarVisible);
  };

  const handleArchiveClick = () => {
    archiveOneActivity(id);
  };

  const handleUnarchiveClick = () => {
    unarchiveOneActivity(id);
  };

  return (
    <div style={activity}>
      <div style={dottedLineStyle}>
        <div style={dateStyle}>{createdDate}</div>
      </div>
      <div style={contentStyle}>
        <div style={iconContainerStyle}>
          {direction === "inbound" ? <SlCallIn /> : <SlCallOut />}
        </div>

        <div>
          <span style={phoneNumberStyle}>{from}</span>
          <div style={textBelowPhoneNumberStyle}>
            tried to call on <span style={nameBelowPhoneNumberStyle}>{to}</span>
            . Aircall: {via}
          </div>
        </div>
        <div style={timeStyle}>
          <PiDotsThreeVerticalLight
            onClick={handleThreeDotsClick}
            style={dropDownIconStyle}
          />
          <span style={timeTextStyle}>{time}</span>{" "}
          <div style={pmTextStyle}>{amPm}</div>
          {isArchiveBarVisible && (
            <div>
              <button
                onClick={isArchived ? handleUnarchiveClick : handleArchiveClick}
                style={archiveButtonStyle}
              >
                {isArchived ? "Unarchive" : "Archive"}
              </button>
              <Link
                key={id}
                to={`/${id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                  height: "100%",
                }}
              >
                Details
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const dottedLineStyle = {
  borderTop: "1px dotted #dddddd",
  margin: "20px 0",
  width: "100%",
  position: "relative",
};

const timeTextStyle = {
  fontSize: "11px",
  marginTop: "3px",
  color: "#BBBBBB",
};

const nameBelowPhoneNumberStyle = {
  fontSize: "12px",
  fontWeight: "500",
  color: "#999999",
};

const archiveButtonStyle = {
  cursor: "pointer",
  margin: "5px 0",
  backgroundColor: "#48c424",
  color: "white",
  border: "none",
  borderRadius: "4px",
  padding: "8px 12px",
  fontSize: "14px",
  fontWeight: "bold",
};

const pmTextStyle = {
  border: "1px solid #dddddd",
  borderRadius: "2px",
  marginLeft: "4px",
  fontSize: "9px",
  padding: "3px",
  color: "#BBBBBB",
  fontWeight: "600",
};

const dropDownIconStyle = {
  fontSize: "1rem",
  cursor: "pointer",
  color: "#BBBBBB",
  marginRight: "3px",
};

const textBelowPhoneNumberStyle = {
  marginTop: "5px",
  color: "#BBBBBB",
  fontSize: "11px",
};

const phoneNumberStyle = {
  fontWeight: "bold",
  color: "#555555",
};

const timeStyle = {
  marginLeft: "auto",
  display: "flex",
  fontWeight: "bold",
};

const iconContainerStyle = {
  marginLeft: "20px",
  marginRight: "15px",
};

const contentStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#fffcfc",
  border: "1px solid #dddddd",
  borderRadius: "10px",
  height: "60px",
  width: "90%",
  maxWidth: "400px",
};

const dateStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#ffffff",
  padding: "0 10px",
  fontSize: "11px",
  color: "#BBBBBB",
  fontWeight: "600",
};

const activity = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
};

export default Activity;
