import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes";
import Home from "./view/Home";
const App=()=>{
    return(
        <Router>
            
            <Routes>
        {/* <Home></Home> */}
           </Routes>
            
        </Router>
        
    );   
};

export default App;
