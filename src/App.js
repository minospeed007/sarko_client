import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/header';
import Home from './home/home';
import Login from './login/login';
import LiveStream from "./liveStream/liveStream";

import './App.css';
import Signup from './signup/signup';
import CreateUser from './create/create';
import About from './about/about';
import WS from './websocket/websocket';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/about" element={<About />} />
          <Route path="/ws" element={<WS />} />


          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/live" element={<LiveStream />} />
          <Route path="/create_user" element={<CreateUser />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;