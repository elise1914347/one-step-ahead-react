import React from "react";
import HomeLayout from "../Component/Homelayout";
import "../Component/Navbar/Navbar.css";
import { Button, Card,Form,Space,Input,Tooltip,Typography} from "antd";
import { Carousel } from "antd";
import Photo from "../asset/Images/download.jpg";
import Photos from "../asset/Images/Grow.jpg";
import Photoes from "../asset/Images/sgsyg.jpg";
// import Carousel from "react-bootstrap/Carousel";
import Success from "../asset/Images/ryan-success.jpg";
import Successe from "../asset/Images/ghita-success.jpg";
import Successy from "../asset/Images/laura-success.jpg";
import el from "../asset/Images/23.jpg";



const About = () => {
  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  return (
    <>
    <div>
      <div className="images">
        <h1 style={{color:"white",marginLeft:"160px",paddingTop:"190px"}}>One step Ahead is the world's largest therapy platform</h1>
      </div>
      <section>
        <p style={{ color: "green", textAlign: "center", fontSize: "20px" }}>
          our mission
        </p>
        <br></br>
        <p style={{ textAlign: "center", fontSize: "12px" }}>
          Making professional therapy accessible, affordable and convenient so
          <br></br>
          anyone who trugles with life challenges can get help, anytime and
          anywhere.
        </p>{" "}
        <br></br>
        <p style={{ color: "green", textAlign: "center", fontSize: "20px" }}>
          our Therapist
        </p>
        <br></br>
        <p style={{ textAlign: "center", fontSize: "12px" }}>
          Making professional therapy accessible, affordable and convenient so
          <br></br>
          anyone who trugles with life challenges can get help, anytime and
          anywhere.
        </p>{" "}
        <br></br>
      </section>
      <p style={{ marginLeft: "45%", color: "green" }} className="gug">
        Meet Our Therapist
      </p>
      <p style={{ textAlign: "center", fontSize: "12px" }}>
        <br></br>
        onestepAhead offers access to licensed, trained, experienced, and
        accredited psychologists (PhD / PsyD), marriage and family therapists
        <br></br>
        (LMFT), clinical social workers (LCSW / LMSW), and board licensed
        professional counselors (LPC).
      </p>
      <br></br>
      <Carousel autoplay className="corousel-img">
        <img src={Photo} alt="" />
        <img src={Photos} alt="" />
        <img src={Photoes} alt="" />
        <img src={el} alt="" />
        <img src={el} alt="" />
        <img src={el} alt="" />
      </Carousel>

      <p style={{ color: "green", textAlign: "center", fontSize: "20px" }}>
        our Success stories
      </p>
      <Card className="cardgrid">
        <div className="our">
          <img src={Success} className="Success" />
          <img src={Successe} className="Success" />
          <img src={Successy} className="Success" />
        </div>
        <h1 className="allworld">
          "I have now been working with Sheilah on BetterHelp for about 4 weeks
          <br></br>
          and can confidently say that I am a lot less anxious about my career
          <br></br>
          path now than when I first signed up...I am so much better off now
          than<br></br>I was before."<br></br>
          <h6 style={{ marginLeft: "80px", color: "green" }}>ReadMore</h6>
        </h1>
        <h2 className="allworld">
          "I have now been working with Sheilah on BetterHelp for about 4 weeks
          <br></br>
          and can confidently say that I am a lot less anxious about my career
          <br></br>
          path now than when I first signed up...I am so much better off now
          than<br></br>I was before."<br></br>
          <h6 style={{ marginLeft: "80px", color: "green" }}>ReadMore</h6>
        </h2>
        <h3 className="allworld">
          "I have now been working with Sheilah on BetterHelp for about 4 weeks
          <br></br>
          and can confidently say that I am a lot less anxious about my career
          <br></br>
          path now than when I first signed up...I am so much better off now
          than<br></br>I was before."<br></br>
          <h6 style={{ marginLeft: "80px", color: "green" }}>ReadMore</h6>
        </h3>
        <div className="button-read">
          <Button>SeeMorestories</Button>
          <Button>tellmoreForm</Button>
        </div>
      </Card>
      <br></br>
      <Card>
        <h2 style={{ textAlign: "center", fontSize: "20px", color: "green" }}>
          OurTeam
        </h2>
        <h3 style={{ fontSize: "12px", textAlign: "center" }}>
          We are passionate and compassionate professionals, driven by the
          mission<br></br>
          of helping more people live a better and happier life every day. We
          are<br></br>
          growing fast and always looking for new talent. If you love people and
          like challenges - come and join us!<br></br>
        </h3>
        <div
          className="image-carousel"
          style={{ width: "100rem", padding: "1.5rem" }}
        >
          <img
            src="https://dy7glz37jgl0b.cloudfront.net/about/team-julie-laura-3.jpg?v=966d54b722cb"
            alt=""
          ></img>
          <img
            src="https://dy7glz37jgl0b.cloudfront.net/about/team-victoria-aaron.jpg?v=966d54b722cb"
            alt=""
          ></img>
          <img
            src="https://dy7glz37jgl0b.cloudfront.net/about/team-julie-nick-omer.jpg?v=966d54b722cb"
            alt=""
          ></img>
          <Form
      name="complex-form"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
    >
      <Form.Item label="Username">
        <Space>
          <Form.Item
            name="username"
            noStyle
            rules={[
              {
                required: true,
                message: 'Username is required',
              },
            ]}
          >
            <Input
              style={{
                width: 150,
                textAlign:"center"
              }}
              placeholder="Stories"
            />
          </Form.Item>
          <Tooltip title="Useful information">
            <Typography.Link href="#API">Need Help?</Typography.Link>
          </Tooltip>
        </Space>
      </Form.Item>
      </Form>
        </div>
        <Button className="button-read" style={{ color: "green" }}>
          join OurTeam
        </Button>
      </Card>
      <br></br>
      <Card>
        <h1 style={{ textAlign: "center", fontSize: "20px", color: "green" }}>
          Our Support
        </h1>
        <h2 style={{ textAlign: "center", fontSize: "10px" }}>
          Our support team is always here to answer any question and resolve any
          problem. Just contact us
        </h2>
        <div>
          <img
            src="https://dy7glz37jgl0b.cloudfront.net/about/support-bonnie-sonya.jpg?v=966d54b722cb"
            alt=""
            style={{ width: "30rem" }}
          ></img>
          <img
            src="https://dy7glz37jgl0b.cloudfront.net/about/support-laura-2.jpg?v=966d54b722cb"
            alt=""
            style={{ width: "36rem", padding: "3rem" }}
          ></img>
          <img
            src="https://dy7glz37jgl0b.cloudfront.net/about/support-aaron.jpg?v=966d54b722cb"
            alt=""
            style={{ width: "36rem", padding: "3rem" }}
          ></img>
        </div>
        <Button className="button-read" style={{ color: "green" }}>
          contact Support
        </Button>
      </Card>
      <br></br>
      <Card>
        <h1 style={{ textAlign: "center", fontSize: "20px", color: "green" }}>
          Our Office
        </h1>
        <h2 style={{ textAlign: "center", fontSize: "10px" }}>
          Our office is located in the heart of Silicon Valley, where<br></br>
          world-changing technologies are being created. We are proud neighbours
          of iconic companies like Google, Apple, and Facebook.
        </h2>
        <div>
          <img
            src="https://dy7glz37jgl0b.cloudfront.net/about/office-1.jpg?v=966d54b722cb"
            alt=""
            style={{ width: "30rem" }}
          ></img>
          <img
            src="https://dy7glz37jgl0b.cloudfront.net/about/office-4.jpg?v=966d54b722cb"
            alt=""
            style={{ width: "36rem", padding: "3rem" }}
          ></img>
          <img
            src="https://dy7glz37jgl0b.cloudfront.net/about/office-5.jpg?v=966d54b722cb"
            alt=""
            style={{ width: "36rem", padding: "3rem" }}
          ></img>
        </div>
        <Button className="button-read" style={{ color: "green" }}>
          Visit Us
        </Button>
      </Card>
      </div>
    </>
  );
 };
// };
export default About;
