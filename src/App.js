import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';


import MainPage from "./Pages/MainPage";
import SiparsiFormu from "./Pages/SiparisFormu";
import SiparisAlindi from "./Pages/SiparisAlindi";

const App = () => {
  return (
    <>
    <Routes>   
      <Route path = "/success" element={<SiparisAlindi/>}/> 
      <Route path = "/pizza" element={<SiparsiFormu/>}/>
      <Route exact path = "/" element={<MainPage/>}/>
    </Routes>
    </>
  );
};
export default App;
