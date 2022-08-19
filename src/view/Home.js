import React from "react";
import "../Component/Navbar/Navbar.css";
import { Form,Button,Radio} from 'antd';
import { Carousel } from 'antd';
import photo  from "../asset/Images/t1.jpg";
import pic from "../asset/Images/t1.jpg";
import picture from "../asset/Images/t4.jpg";
import therapy from "../asset/Images/t6.jpg";
import img from "../asset/Images/home2.jpg";
import  "../view/home.css";
const Home = () => {
  return (
    <>
{/* putAnImage */}
      <div className="img">
        <div>
     <h3 className="carousel-img">Stay Health And Be Happy</h3>
     <h3  className="carousel-img">What Type of Therapy are you looking for?</h3>
     </div>
     <div className="ighr">
     <Form.Item className="button" >
       <a href="/Getstarted"> <Button style={{background:"rgb(2, 12, 68)",color:"white",textAlign: "center",marginLeft:"1rem",borderRadius:"1px",width:"20rem",marginTop:"15px"}}>Individual<br></br><br></br><h4 style={{color:"white"}}>(for myself)</h4></Button></a>
      </Form.Item>
      <Form.Item >
      <a href="/Getstarted"> <Button style={{background:"rgb(2, 12, 68)",color:"white",textAlign: "center",marginLeft:"1rem",borderRadius:"1px",marginTop:"15px"}}>Couple<br></br><br></br><h4 style={{color:"white"}}>(for me and my parterner)</h4></Button></a>
      </Form.Item>
      <Form.Item >
      <a href="/Getstarted"> <Button style={{background:"rgb(2, 12, 68)",color:"white",textAlign: "center",marginLeft:"1rem",borderRadius:"1px",width:"20rem",marginTop:"15px"}}>Children<br></br><br></br><h4 style={{color:"white"}}>(for my child)</h4></Button></a>
      </Form.Item>
      </div>
      </div>
      {/* radioButton */}
      <div className="carousel-img">
        <h5 style={{textAlign: "center",fontFamily:"sans-serif",fontSize:"1.5rem"}}>The best largest Therapy service 100% online</h5>
        <div >
        <Form.Item label="" name="Message,Phone,Chatand video Session">
        
        <Radio.Group>
          <Radio.Button value>0</Radio.Button>
          <Radio.Button value>7</Radio.Button>
          <Radio.Button value>8</Radio.Button>
          <Radio.Button value>8</Radio.Button>
          <Radio.Button value>7</Radio.Button>
          <Radio.Button value>1</Radio.Button>
          <Radio.Button value>6</Radio.Button>
          <Radio.Button value>9</Radio.Button>
          <Radio.Button value>7</Radio.Button>
          <Radio.Button value>1</Radio.Button>  
        </Radio.Group>
        <h4 style={{marginTop:"5px"}}>Message,Phone,Chat and video Session</h4>
       
      </Form.Item>
      </div>
      <h2 style={{color:"green",textAlign:"center"}}>Profession,licensed and veted Therapist who you can trust</h2>
      {/* SlideShow */}
      <div className="hne"> 
        <Carousel autoplay>
            <img src={photo} alt=""/>
            <img src={pic} alt=""/>
            <img src={picture} alt=""/>
            <img src={therapy} alt=""/>

        </Carousel>
        {/* world */}
        <h6 style={{fontFamily:"revert",fontSize:"1.5rem"}}>
        Tap into the world's largest network of licensed, accredited, 
        and experienced therapists who can help you with a range of 
        issues including depression, anxiety, relationships, trauma, 
        grief, and more. With our therapists, you get the same professionalism 
        and quality you would expect from an in-office therapist, but with the
         ability to communicate when and how you want.
        </h6>

        <Form.Item >
       <a href="/asktherapist"><Button style={{background:"rgb(2, 12, 68)",color:"white",borderRadius:"10rem",marginLeft:"0px"}}>Get matched to a therapist</Button></a> 
      </Form.Item>
        </div>
        {/* OnotherSlide */}
        
          <h5 style={{textAlign:"center",fontSize:"1.5rem"}}>Talk to your Therapist however you feel confortable</h5>
          <h6 style={{textAlign:"center",fontSize:"1.5rem"}}>Message your therapist anytime from anywhere. No scheduling needed.</h6>
          <div className="ther">
          <img src="https://dy7glz37jgl0b.cloudfront.net/home/betterhelp/full-schedule.png?v=966d54b722cb" alt=""></img>
          
          
          <img src="https://dy7glz37jgl0b.cloudfront.net/home/betterhelp/full-session.png?v=966d54b722cb" alt="" ></img>  
        </div>

      </div>
      


    </>
    );
};

export default Home;
