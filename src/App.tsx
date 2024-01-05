import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and other related components
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
