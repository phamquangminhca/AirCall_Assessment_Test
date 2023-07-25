import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import ActivityFeed from './components/ActivityFeed.jsx';


const App = () => {
  return (
    <Router>
        <div className='container'>
          <Header/>
          <Routes>
            <Route path='/' element={<ActivityFeed/>} />
          </Routes>
        </div>
    </Router>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
