import React, { useEffect, useState } from "react";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import Activity from "./Activity.jsx";
import { Link } from "react-router-dom";

function ArchivedFeed({
  activitiesFromApp,
  loadingFromApp,
  setActivitiesFromApp,
}) {
  function convertTimestampToTime(timestamp) {
    const date = new Date(timestamp);
    let hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const time = `${hours}:${minutes} ${amPm}`;
    return time;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleString("en-US", options);
  }

  function unarchiveOneActivity(id) {
    setActivitiesFromApp((activitiesFromApp) => {
      return activitiesFromApp.map((activity) => {
        if (activity.id === id) {
          return Object.assign({}, activity, { is_archived: false });
        }
        return activity;
      });
    });
    console.log(activitiesFromApp);
  }

  // Unarchive all activities
  const unarchiveAllActivities = () => {
    const updatedActivities = activitiesFromApp.map((activity) => {
      const updatedActivity = {
        id: activity.id,
        is_archived: false,
      };
      if (activity.hasOwnProperty("direction")) {
        updatedActivity.direction = activity.direction;
      }
      if (activity.hasOwnProperty("duration")) {
        updatedActivity.duration = activity.duration;
      }
      if (activity.hasOwnProperty("call_type")) {
        updatedActivity.call_type = activity.call_type;
      }
      if (activity.hasOwnProperty("from")) {
        updatedActivity.from = activity.from;
      }
      if (activity.hasOwnProperty("to")) {
        updatedActivity.to = activity.to;
      }
      if (activity.hasOwnProperty("via")) {
        updatedActivity.via = activity.via;
      }
      if (activity.hasOwnProperty("created_at")) {
        updatedActivity.created_at = activity.created_at;
      }
      return updatedActivity;
    });
    setActivitiesFromApp(updatedActivities);
  };

  const filteredActivities = activitiesFromApp.filter(
    (activity) => activity.is_archived
  );

  return (
    <div style={pageContainerStyles}>
      <div style={buttonContainerStyles}>
        <button style={buttonStyles} onClick={unarchiveAllActivities}>
          <div style={iconContainerStyle}>
            <RiInboxUnarchiveLine />
          </div>
          Unarchive all calls
        </button>
        {loadingFromApp ? (
          <p>Loading...</p> 
        ) : (
          filteredActivities.map((activity) => (
            <Activity
              key={activity.id}
              isArchived={activity.is_archived}
              direction={activity.direction}
              from={activity.from}
              to={activity.to}
              via={activity.via}
              id={activity.id}
              unarchiveOneActivity={unarchiveOneActivity}
              createdDate={formatDate(activity.created_at)}
              calledAt={convertTimestampToTime(activity.created_at)}
            />
          ))
        )}
      </div>
    </div>
  );
}

const iconContainerStyle = {
  marginRight: "10px",
};

const pageContainerStyles = {
  maxHeight: "548px", 
  overflowY: "auto", 
};

const buttonContainerStyles = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column", 
  alignItems: "center", 
};

const buttonStyles = {
  margin: "10px", 
  padding: "10px 20px", 
  backgroundColor: "#fffcfc", 
  border: "1px solid #dddddd", 
  borderRadius: "10px",
  display: "flex", 
  fontSize: "16px", 
  cursor: "pointer", 
  width: "90%", 
  maxWidth: "400px", 
};

export default ArchivedFeed;
