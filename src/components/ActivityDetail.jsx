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
        <div style={cardStyles}>
          <div style={contentStyles}>
            <strong style={strongStyles}>Activity Details</strong>
            {activityData.direction && (
              <p>
                <strong style={strongStyles}>Direction:</strong> <span style={textStyles}>{activityData.direction}</span>
              </p>
            )}
            {activityData.from && (
              <p>
                <strong style={strongStyles}>Caller's number:</strong> <span style={textStyles}>{activityData.from}</span>
              </p>
            )}
            {activityData.duration && (
              <p>
                <strong style={strongStyles}>Duration:</strong> <span style={textStyles}>{activityData.duration} seconds</span>
              </p>
            )}
            {activityData.call_type && (
              <p>
                <strong style={strongStyles}>Call Type:</strong> <span style={textStyles}>{activityData.call_type}</span>
              </p>
            )}
            {activityData.is_archived !== undefined && (
              <p>
                <strong style={strongStyles}>Is archived:</strong>{" "}
                <span style={textStyles}>{activityData.is_archived ? "Archived" : "Not archived"}</span>
              </p>
            )}
            {activityData.created_at && (
              <p>
                <strong style={strongStyles}>Called at:</strong> <span style={textStyles}>{activityData.created_at}</span>
              </p>
            )}
          </div>
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

const strongStyles = {
  color: "#999999",
};

const textStyles = {
  color: "#BBBBBB",
};

const cardStyles = {
  maxWidth: "500px",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fffcfc",
};

const titleStyles = {
  // textAlign: "center",
  marginBottom: "10px",
  fontWeight: "bold",    
  color: "#48c424",
};

const contentStyles = {
  textAlign: "center",
};

export default ActivityDetail;
