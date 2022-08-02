import React from "react";

import {Routes,Route} from 'react-router-dom';
import AboutUs from "../view/aboutUs";
import Home from "../view/Home";
import HomeLayout from "../Component/Homelayout";
const index=() =>{
    return (
        <>
         <HomeLayout>
       
        <Routes>
         <Route exact path="/Home" element={<Home/>}></Route>  
            <Route exact path="/aboutus" element={<AboutUs/>}></Route>
        </Routes>
        </HomeLayout>
      
 </>
    );
};
export default index;