import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lobby from './pages/Lobby';
import Fiction from './pages/Fiction';
import NonFiction from './pages/NonFiction';
import SelfImprovement from './pages/SelfImprovement';
import ScienceTechnology from './pages/ScienceTechnology';
import './Lobby.css';
import './Main.css'


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="fiction" element={<Fiction />} />
        <Route path="nonfiction" element={<NonFiction />} />
        <Route path="selfimprovement" element={<SelfImprovement />} />
        <Route path="sciencetechnology" element={<ScienceTechnology />} />

        {/* Add other routes here */}
      </Routes>
    </Router>
  </React.StrictMode>
);
