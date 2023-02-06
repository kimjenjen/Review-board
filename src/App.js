import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component/main/main';
import Login from './component/login/login';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
