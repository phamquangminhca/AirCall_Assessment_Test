import React, { useEffect, useState } from 'react';
import {BsArchive} from 'react-icons/bs';
import Activity from './Activity.jsx';
import axios from 'axios';
import { API_BASE_URL } from '../utils/apiURL.js';


function ActivityFeed() {
  const [activities, setActivities] = useState([]);
  
  useEffect(() => {
    // Fetch data from the API using axios (or your preferred HTTP library)
    axios.get(`${API_BASE_URL}/activities`)
      .then((response) => {
        // Assuming the response contains an array of activity objects
        setActivities(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(activities);

  return (
    <div style={buttonContainerStyles}>
      <button style={buttonStyles}>
        <BsArchive/>
        Archive all calls
      </button>
      <Activity/>
      <Activity/>
      <Activity/>
      <Activity/>
    </div>
  )
}

const buttonContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column', // Set the container's flex direction to column
    alignItems: 'center', // Center the child elements horizontally

  };

const buttonStyles = {
    margin: '10px', // Add some margin around the button
    padding: '10px 20px', // Add padding to make the button more clickable
    backgroundColor: '#fffcfc', // Set the background color of the button
    border: '1px solid #dddddd', // Remove the button border
    borderRadius: '10px', // Add some border radius to make the button rounded
    fontSize: '16px', // Set the font size of the button text
    cursor: 'pointer', // Add a pointer cursor on hover to indicate interactivity
    width: '90%', // Set the button width to 90% of its container (in this case, almost the same width as the body)
    maxWidth: '400px', // Set a maximum width for the button to prevent it from becoming too wide
};


export default ActivityFeed
