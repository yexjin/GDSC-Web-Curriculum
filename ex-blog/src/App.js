import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UpdateForm from './pages/content/UpdateForm';
import JoinForm from './pages/user/JoinForm';
import LoginForm from './pages/user/LoginForm';
import Detail from './pages/content/Detail';
import SaveForm from './pages/content/SaveForm';
import Home from './pages/content/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home/>} />
        <Route path="/saveForm" exact={true} element={<SaveForm/>} />
        <Route path="/post/:id" exact={true} element={<Detail/>} />
        <Route path="/loginForm" exact={true} element={<LoginForm/>} />
        <Route path="/joinForm" exact={true} element={<JoinForm/>} />
        <Route path="/updateForm/:id" exact={true} element={<UpdateForm/>} />
      </Routes>
    </div>
  );
}

export default App;
