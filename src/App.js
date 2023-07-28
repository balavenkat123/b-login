import React from 'react'
import Login from "./Login";
import {BrowserRouter, Routes , Route } from "react-router-dom";
import Signup from './Signup';
import Success from './Success';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} ></Route>
        <Route path="/Signup" element={<Signup/>} ></Route>
        <Route path="/Success" element={<Success/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App