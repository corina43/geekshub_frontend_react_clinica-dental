//import { useState } from "react";
import {  BodyPages } from "./pages/body/BodyPages";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacion } from "./common/Navegacion/Navegacion ";
import { Router } from "react-router-dom";



function App() {


  return (
    <div className="App">
    
      
      <BodyPages />
      <Navegacion />
      
   
    </div>
  )
}

export default App
