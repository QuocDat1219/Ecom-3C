import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const CenterMode = ({ currentProducts }) => {
  const data = currentProducts?.imagesDetail;

  return (
    <Carousel>
      {data?.map((item) => {
        return (
          <div>
            <img src={item?.url} />
          
          </div>
        );
      })}
      {/* <div>
        <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg" />
      </div>
      <div>
        <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg" />
      </div>
      <div>
        <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg" />
      </div> */}
    </Carousel>
  );
};
export default CenterMode;
