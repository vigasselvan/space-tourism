import React from 'react';
import { HashRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Home from './home';
import Destination from './destination';
import Crew from './crew';
import Technology from './technology';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<><Home /> <Outlet /></>} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />}  />
        <Route path="/technology" element={<Technology />}  />
      </Routes>
    </Router>
    </>
  );
    
}

export default App;
