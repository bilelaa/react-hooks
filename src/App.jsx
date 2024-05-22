import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Moviecard from "./components/Moviecard";
import Movielist from "./components/Movielist";
import NavBar from "./components/Navbar";
import {Input} from "@chakra-ui/react";


function App() {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <>
    <div>
      <NavBar setIsAdding={setIsAdding} isAdding={isAdding} />
       
      {!isAdding ? <Movielist /> : 
      <div style={{display:"flex",justifyContent:"center"}}>
      <Add /></div>}
     
      </div>
      
    </>
  );
}

export default App;
