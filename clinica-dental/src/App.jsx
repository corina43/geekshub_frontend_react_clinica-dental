
import {  BodyPages } from "./pages/body/BodyPages";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./common/Header/Header";
import {Footer} from "./common/Footer/Footer";
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


 





function App() {


  return (
    <div className="App">
     
    <Header/>
  
      <BodyPages />
    
     <Footer/>
  
      
   
    </div>
  )
}

export default App
