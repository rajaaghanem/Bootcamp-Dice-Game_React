import React from "react";
import "./Message.css"


class Massege extends React.Component {
    render() {
      return (
        <div className={`massege-box`}>
         <p>You got double sixes <br/>
          you have lost all your points!!<i className="far fa-frown-open"></i></p> 
        </div>
      );
    }
  }
  
  export default Massege;
  