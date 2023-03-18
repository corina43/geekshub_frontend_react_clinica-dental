
import {  BodyPages } from "./pages/body/BodyPages";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacion } from "./common/Navegacion/Navegacion ";
//import { Home } from "./pages/home/HomePage";





function App() {


  return (
    <div className="App">
    
    <Navegacion /> 
      <BodyPages />
     
      {/* <Home/> */}
      
   
    </div>
  )
}

export default App
