import React from "react"; 
import "./Widjet.css";
import _default from "antd/lib/time-picker";

const Widgets=({type})=> {
    let data;
    switch (type) {
        case "User":
        data={
         title:"USERS",
        counter:"7000$",
        link:"see all Users",
      //   icon:<PersonIcon className="icon"/>,
            };
     break;
     case "TOTALBOOKED":
        data={
         title:"TOTALBOOKED",
        counter:"200$",
        link:"see all Users",
      //   icon:<PersonIcon className="icon"/>,
        };
        break;
     case "INCOME":
        data={
         title:"INCOME",
        counter:"500$",
        link:"see all Users",
      //   icon:<PersonIcon className="icon"/>,
     };
    break;
    case "PRICE":
    data={
        title:"PRICE",
        counter:"$5000",
        link:"see all Users",
      //   icon:<PersonIcon className="icon"/>,
    };
    break;
    case "TOTALEARNING":
    data={
         title:"TOTAEARNING",
        counter:"$5000",
        link:"see all Users",
      //   icon:<PersonIcon className="icon"/>,
    };
            
    }
    return(
        <>
        <div className=" widget">
           <div className="left">
           <span className="title">{data?.title}</span>
           <span className="counter">{data?.counter}</span>
           <span className="link  ">{data?.link}</span>
           </div>
           <div className="right">
            <div className="percentage positive">
             {/* <UpOutlined /> */}
               20 %
            </div>
            <span className="icon">{data?.icon}</span>
           </div>
        </div>
        
       </> 
    );
};
export default Widgets;