import React from 'react';
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  return (
    
      <BrowserRouter>
        <Header />
        <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Cart" element={<Cart />} />
      </Routes>
      </div>
      </BrowserRouter>
    
      
  );
}

export default App;
