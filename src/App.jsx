import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import ActivityFeed from "./components/ActivityFeed.jsx";
import ArchivedFeed from "./components/ArchivedFeed.jsx";
import { API_BASE_URL } from "./utils/apiURL.js";
import axios from "axios";
import Footer from "./Footer.jsx";
import ActivityDetail from "./components/ActivityDetail.jsx";
import Keypad from "./components/Keypad.jsx";
import Location from "./components/Location.jsx";
import Profile from "./components/Profile.jsx";
import Setting from "./components/Setting.jsx";
import NotFound from "./components/NotFound.jsx";

const App = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (activities.length === 0) {
      axios
        .get(`${API_BASE_URL}/activities`)
        .then((response) => {
          setActivities(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [activities]);

  console.log(activities);
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ActivityFeed
                activitiesFromApp={activities}
                loadingFromApp={loading}
                setActivitiesFromApp={setActivities}
              />
            }
          />
          <Route path="/:id" element={<ActivityDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/keypad" element={<Keypad />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/location" element={<Location />} />
          <Route
            path="/archives"
            element={
              <ArchivedFeed
                activitiesFromApp={activities}
                loadingFromApp={loading}
                setActivitiesFromApp={setActivities}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
