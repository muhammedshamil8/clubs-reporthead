import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateReport from './pages/CreateReport';
import ViewReport from './pages/ViewDoc';
import Home from './pages/Home';

function App() {
  const [club, setClub] = useState("none");

  return (
    <Router>
      <Routes>
        {/* Default Home Route */}
        <Route 
          path="/" 
          element={<Home setClub={setClub} />} 
        />

        {/* CreateReport Route */}
        <Route 
          path="/create-report" 
          element={<CreateReport club={club} setClub={setClub} />} 
        />

        {/* view Route */}
        <Route 
          path="/view-report" 
          element={<ViewReport  />} 
        />

        {/* 404 Route */}
        <Route 
          path="*" 
          element={<h1>404 Not Found</h1>}
        />

      </Routes>
    </Router>
  );
}

export default App;
