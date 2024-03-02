import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculate" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
