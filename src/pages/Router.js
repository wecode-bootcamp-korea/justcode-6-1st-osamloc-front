import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Login/Login';
import Main from './Main/\bindex';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
