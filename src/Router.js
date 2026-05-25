import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Game from './Pages/Game/Game';
import Details from './Pages/Details/Details';

const Router = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
};

export default Router;