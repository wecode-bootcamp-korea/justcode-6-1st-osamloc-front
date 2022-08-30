import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './Main/Main';
import Login from './Login/Login';
import WeeklyBest from './Products/WeeklyBest/index';
import Best from './Products/WeeklyBest/Best';
import TeaProducts from './Products/TeaProducts';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/weeklybest" element={<WeeklyBest />} />
        <Route path="/weeklybest/best" element={<Best />} />
        <Route path="/teaproducts" element={<TeaProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
