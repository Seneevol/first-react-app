import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Countries from './components/Countries';
import Register from './components/Login/Register';
import About from './pages/About';
import CRUD from './pages/CRUD';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about' exact element={<About/>}/>
          <Route path='/countries' exact element={<Countries/>}/>
          <Route path='/register' exact element={<Register/>}/>
          <Route path='/crud' exact element={<CRUD/>}/>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
