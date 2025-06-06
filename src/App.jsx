import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import FormPage from './components/FormPage';
import SuccessPage from './components/SuccessPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/form" />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
};

export default App;
