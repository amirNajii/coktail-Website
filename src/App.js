import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import SingleCooktail from './pages/SingleCooktail';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cocktail/:id" element={<SingleCooktail />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App