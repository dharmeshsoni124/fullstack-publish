import react from "react"
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signin from "./component/signin";
import Register from "./component/register";
import Publish from "./component/publish"


function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Signin/>}></Route>
           <Route path="/register" element={<Register/>}></Route> 
           <Route path="/publish" element={<Publish/>}></Route> 
          
          
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;
