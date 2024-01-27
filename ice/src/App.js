import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './Main';
import Card from './Card';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/card' element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
