import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Login from './screen/login/login';

function App() {
  return (
    <div className="app">
      <img src={logo} className="app-logo" alt="logo" />
      <Login />
    </div >
  );
}

export default App;
