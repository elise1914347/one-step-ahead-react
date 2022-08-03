import React from "react";

import {Routes,Route} from 'react-router-dom';
import AboutUs from "../view/aboutUs";
import Home from "../view/Home";
import HomeLayout from "../Component/Homelayout";
import Dashboard from "../view/Admin/Dashboard";

const index=() =>{
    return (
        <>
         <HomeLayout>
       
        <Routes>
         <Route exact path="/Home" element={<Home/>}></Route>  
            <Route exact path="/aboutus" element={<AboutUs/>}></Route>
            <Route exact path="/dashboard" element={<Dashboard/>}></Route>
            
        </Routes>
        </HomeLayout>
      
 </>
    );
};
export default index;