import React from "react";

import {Routes,Route} from 'react-router-dom';
import AboutUs from "../view/aboutUs";
import Home from "../view/Home";
import GetStarted from "../view/Getstarted";
import CoupleForm from "../view/couple";
import IndividualForm from "../view/individual";
import DecideForm from "../view/decide";
import HomeLayout from "../Component/Homelayout";
import Question1 from "../view/question";

const index=() =>{
    return (
        <>
         <HomeLayout>
       
        <Routes>
        <Route exact path="/Home" element={<Home/>}></Route>  
        <Route exact path="/aboutus" element={<AboutUs/>}></Route>
        <Route exact path="/start" element={<GetStarted/>}></Route>
        <Route exact path="/couple" element={<CoupleForm/>}></Route>
        <Route exact path="/individual" element={<IndividualForm/>}></Route>
        <Route exact path="/decide" element={<DecideForm/>}></Route>
         <Route exact path="/Home" element={<Home/>}></Route>  
            <Route exact path="/aboutus" element={<AboutUs/>}></Route>
            <Route exact path="/question" element={<Question1/>}></Route>
            
        </Routes>
        </HomeLayout>
      
 </>
    );
};
export default index;