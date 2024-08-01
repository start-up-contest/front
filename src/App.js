import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// api
import { getUserInfo } from './libs/api/user';

// component
import DefaultLayout from './components/layout/DefaultLayout';
import HomePage from './pages/HomePage';
import TutorPage from './pages/TutorPage';
import GuidePage from './pages/GuidePage';



function App() {


  return (
    <Router>
      <Routes>
         <Route path="" element={<HomePage/> } />
         <Route path="/tutor" element={<TutorPage/> } />
         <Route path="/guide" element={<GuidePage/> } />
</Routes>
    </Router>
  );
}

export default App;
