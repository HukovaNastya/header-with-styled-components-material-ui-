import React from 'react';
import { Route, Routes,  Navigate } from 'react-router-dom';
import Home from '../Pages/Home/Home';

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<Navigate replace to="/home" />}/>
   </Routes>
  );
};

export default PublicRouter;