import React from "react";
import "../Component/Navbar/Navbar.css";
import { Form,Button,Radio} from 'antd';
import { Carousel } from 'antd';
import photo  from "../asset/Images/t1.jpg";
import pic from "../asset/Images/t1.jpg";
import picture from "../asset/Images/t4.jpg";
import therapy from "../asset/Images/t6.jpg";
import img from "../asset/Images/home2.jpg";
// import  "../view/Home.css";


const Home = () => {
  return (
    <>

      <div className="img" style={{ backgroundColor: "gray" }}>
     <h3 className="carousel-img" style={{color:"rgb(2, 12, 68)",textAlign: "center" }}>Stay Health And Be Happy</h3><br></br>
     <h3  className="carousel-img"style={{color:"rgb(2, 12, 68)",textAlign: "center"}}>What Type of Therapy are you looking for?</h3>
     <Form.Item className="button" >
       <a href="/Getstarted"> <Button style={{background:"rgb(2, 12, 68)", color:"white",textAlign: "center"}}>Individual<br></br><h4 style={{color:"black"}}>(for myself)</h4></Button></a>
      </Form.Item>
      <Form.Item >
      <a href="/Getstarted"> <Button style={{background:"rgb(2, 12, 68)",color:"white",textAlign: "center"}}>Couple<br></br><h4>(for me and my parterner)</h4></Button></a>
      </Form.Item>
      <Form.Item >
      <a href="/Getstarted"> <Button style={{background:"rgb(2, 12, 68)",color:"white",textAlign: "center"}}>Children<br></br><h4>(for my child)</h4></Button></a>
      </Form.Item>

      </div>
      <div className="carousel-img">
        <h5 style={{textAlign: "center"}}>The best largest Therapy service 100% online</h5>

        <Form.Item label="Message,Phone,Chat and video Session" name="Message,Phone,Chatand video Session">
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
      </Form.Item>
      <div className="carousel-img">
        <h2 style={{color:"green"}}>Profession,licensed and veted Therapist who you can trust</h2>
      
        <Carousel autoplay>
            <img src={photo} alt=""/>
            <img src={pic} alt=""/>
            <img src={picture} alt=""/>
            <img src={therapy} alt=""/>

        </Carousel>
        <h5>
        Tap into the world's largest network of licensed, accredited, 
        and experienced therapists who can help you with a range of 
        issues including depression, anxiety, relationships, trauma, 
        grief, and more. With our therapists, you get the same professionalism 
        and quality you would expect from an in-office therapist, but with the
         ability to communicate when and how you want.
        </h5>

        <Form.Item >
       <a href="/asktherapist"><Button style={{background:"rgb(2, 12, 68)",color:"white"}}>Get matched to a therapist</Button></a> 
      </Form.Item>
        </div>
        <div>
          <h5 style={{color:"green"}}>Talk to your Therapist however you feel confortable</h5>
          <h5>Therapy when you need it</h5>
          <h6>Message your therapist anytime from anywhere. No scheduling needed.</h6>
          <img src="https://dy7glz37jgl0b.cloudfront.net/home/betterhelp/full-schedule.png?v=966d54b722cb" alt=""></img> 
          <img src="https://dy7glz37jgl0b.cloudfront.net/home/betterhelp/full-session.png?v=966d54b722cb" alt=""></img>  
        </div>


      <div className="Header">
        <img
          src={img}
          alt=""
          style={{
            minHeight: "100vh",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
            backgroundImage:
              "linear-gradient(rgba(24, 21, 21, 0.418), rgba(16, 18, 27, 0.7))",
          }}
        />  
           
      </div>
      </div>
  
    </>
    );
};

export default Home;
