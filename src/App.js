import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// api
import { getUserInfo } from './libs/api/user';

// component
import DefaultLayout from './components/layout/DefaultLayout';
import HomePage from './pages/HomePage';
import TutorPage from './pages/TutorPage';
import GuidePage from './pages/GuidePage';
import LoginPage from './pages/LoginPage';
import UniversitySelectionPage from './pages/UniversitySelectionPage';
import HousingTypeSelectionPage from './pages/HousingTypeSelectionPage';
import LanguageSelectionPage from './pages/LanguageSelectionPage';
import DurationPage from './pages/DurationPage';
import ResidenceStatusPage from './pages/ResidenceStatusPage';
import ServiceSelectionPage from './pages/ServiceSelectionPage';
import TutorSelectionPage from './pages/TutorSelectionPage';



function App() {


  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/tutor" element={<TutorPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/univ" element={<UniversitySelectionPage />} />
        <Route path="/housing" element={<HousingTypeSelectionPage />} />
        <Route path="/language" element={<LanguageSelectionPage />} />
        <Route path="/duration" element={<DurationPage />} />
        <Route path="/residence" element={<ResidenceStatusPage />} />
        <Route path="/service" element={<ServiceSelectionPage />} />
        <Route path="/tutorselection" element={<TutorSelectionPage />} />

      </Routes>
    </Router>
  );
}

export default App;
