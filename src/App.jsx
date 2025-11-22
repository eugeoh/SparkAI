import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Concept from './pages/Concept';

import MindMap from './components/MindMap';

import AntigravityExperiment from './pages/AntigravityExperiment';
import Experiment from './pages/Experiment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="concepts/:id" element={<Concept />} />
          <Route path="mindmap" element={<MindMap />} />
          <Route path="experiments/antigravity" element={<AntigravityExperiment />} />
          <Route path="experiments/:id" element={<Experiment />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
