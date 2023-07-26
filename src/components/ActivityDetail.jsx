import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../utils/apiURL";

function ActivityDetail() {
  const [activityData, setActivityData] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/activities/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setActivityData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div style={containerStyles}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={contentStyles}>
          <h1>Call's Id: {activityData.id}</h1>
          {activityData.direction && (
            <h1>Direction: {activityData.direction}</h1>
          )}
          {activityData.from && <h1>Caller's number: {activityData.from}</h1>}
          {activityData.duration && (
            <h1>Callee's number: {activityData.duration}</h1>
          )}
          {activityData.call_type && (
            <h1>Call Type: {activityData.call_type}</h1>
          )}
          {activityData.is_archived !== undefined && (
            <h1>Is archived: {activityData.is_archived.toString()}</h1>
          )}
          {activityData.created_at && (
            <h1>Called at: {activityData.created_at}</h1>
          )}
        </div>
      )}
    </div>
  );
}

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
};

const contentStyles = {
  textAlign: "center",
};

export default ActivityDetail;
