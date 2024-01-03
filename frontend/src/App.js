import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Journal from './pages/Journal';
import History from './pages/History';
import Egg from './pages/Egg';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import EmotionAnalysis from './pages/EmotionAnalysis';

function App() {
  const location = useLocation();

  // List of routes where Navbar should be displayed
  const navbarRoutes = ['/journal', '/history', '/egg'];

  const shouldDisplayNavbar = navbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      {shouldDisplayNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/history" element={<History />} />
        <Route path="/egg" element={<Egg />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/emotion-analysis" element={<EmotionAnalysis/>} />
      </Routes>
    </div>
  );
}

export default App;
