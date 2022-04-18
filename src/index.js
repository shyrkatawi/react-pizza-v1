import React from 'react';
import ReactDOM from 'react-dom/client';

import './scss/app.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { Cart, Header } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
);
// root.render(
//     <App />
// );
