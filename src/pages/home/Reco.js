import React from 'react';
import { Carousel } from '3d-react-carousal';

function Reco() {
    
      let slides = [
      <img  src={require("../../assets/img/cert/1.png").default} alt="1" />,
      <img  src={require("../../assets/img/cert/2.png").default} alt="2" />  ,
      <img  src={require("../../assets/img/cert/3.png").default} alt="3" />  , 
      <img  src={require("../../assets/img/cert/4.png").default} alt="4" />  ,
      <img src={require("../../assets/img/cert/5.png").default} alt="5" />  ];
      
      return (
        <div className="mt-20 mb-20 text-center">
          <p className="p-6 text-4xl font-bold">Recognition</p>
          <p className="mx-6 text-center lg:mx-44 text-xl text-gray-500" data-aos="zoom-y-out">Our Ambitions and Success.</p>
          <br></br>
          <Carousel slides={slides} />
        </div>
      );
}
  
export default Reco;
  
  