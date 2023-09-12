import React from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppRouter from './config/router/router';

function App() {
  return (
    <div className="App">
    <AppRouter/>
    </div>
  );
}

export default App;
