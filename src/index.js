import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Recipes from './components/routes/Recipes';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="recipes" element={<Recipes />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
