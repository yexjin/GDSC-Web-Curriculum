import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/content/Home';
import SaveForm from './pages/content/SaveForm';
import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/saveForm" element={<SaveForm/>} />
        <Route path="/loginForm" element={<LoginForm/>} />
        <Route path="/joinForm" element={<JoinForm/>} />
      </Routes>
    </>
  );
}

export default App;
