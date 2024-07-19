import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// api
import { getUserInfo } from './libs/api/user';

// component
import DefaultLayout from './components/layout/DefaultLayout';



function App() {


  return (
    <Router>
      <Routes>
        {/* <Route path="/sample" element={<SamplePage/> } /> */}

</Routes>
    </Router>
  );
}

export default App;
