import React from "react";

import {Routes,Route} from 'react-router-dom';
import AboutUs from "../view/aboutUs";
import Home from "../view/Home";
import GetStarted from "../view/Getstarted";
import CoupleForm from "../view/couple";
import IndividualForm from "../view/individual";
import DecideForm from "../view/decide";
import HomeLayout from "../Component/Homelayout";
import Dashboard from "../view/Admin/Dashboard";
import RegisterTherapist from "../view/Admin/Register-Therapist";
import Login from "../view/login";
import Register from "../view/sign-upget";
import AskTherapist from "../view/requestTherapist";
import TherapistForm from "../view/Therapist/therapistform";

import Contact from "../view/contactUs"




const index=() =>{
    return (
        <>
         <HomeLayout>
       
        <Routes>
        <Route exact path="/therapist" element={<TherapistForm/>}></Route>
        <Route exact path="/asktherapist" element={<AskTherapist/>}></Route>
        <Route exact path="/register" element={<RegisterTherapist/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/signup" element={<Register/>}></Route>
        <Route exact path="/Home" element={<Home/>}></Route>    
        <Route exact path="/aboutus" element={<AboutUs/>}></Route>
        <Route exact path="/GetStarted" element={<GetStarted/>}></Route>
        <Route exact path="/couple" element={<CoupleForm/>}></Route>
        <Route exact path="/individual" element={<IndividualForm/>}></Route>
        <Route exact path="/decide" element={<DecideForm/>}></Route> 
            <Route exact path="/aboutus" element={<AboutUs/>}></Route>

            <Route exact path="/dashboard" element={<Dashboard/>}></Route>  
              

            <Route exact path="/contactUs" element={<Contact/>}></Route> 

        </Routes>
        </HomeLayout>
      
 </>
    );
};
export default index;