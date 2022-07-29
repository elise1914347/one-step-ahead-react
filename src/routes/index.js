import React from "react";

import {Routes,Route} from 'react-router-dom';
import AboutUs from "../view/aboutUs";
import Home from "../view/Home"
const index=() =>{
    return (
        <>
         
       
        <Routes>
         <Route exact path="/Home" element={<Home/>}></Route>  
            <Route exact path="/aboutus" element={<AboutUs/>}></Route>
        </Routes>
    
      
 </>
    );
};
export default index;