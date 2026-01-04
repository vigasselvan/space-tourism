import React from 'react';
import { HashRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Home from './components/home';
import Destination from './components/destination';
import Crew from './components/crew';
import Technology from './components/technology';
import data from './data.json';

function App() {
  const selectedDestination = data.destinations.find(
    (destination) => destination.name.toLowerCase() === "mars"
  );

  console.log(selectedDestination.images.webp);
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
  )
}

export default App
