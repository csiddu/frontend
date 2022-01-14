import React from 'react';
import { Carousel } from '3d-react-carousal';

function Slider() {
    
      let slides = [
        <img  src={require("../../assets/img/events/8.png").default} alt="1" />,
        <img  src={require("../../assets/img/events/2.png").default} alt="2" />,
        <img  src={require("../../assets/img/events/9.png").default} alt="2" />,
        <img  src={require("../../assets/img/events/6.png").default} alt="3" />,
        <img  src={require("../../assets/img/events/4.png").default} alt="4" />,
        <img  src={require("../../assets/img/events/5.png").default} alt="5" />,
          ];
      
      return (
        <div className="App">
          <Carousel slides={slides}/>
        </div>
      );
}
  
export default Slider;
  
  