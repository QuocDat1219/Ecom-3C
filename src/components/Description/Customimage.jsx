import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default class CenterMode extends Component {
  // render() {
  //   const settings = {
  //     customPaging: function (i) {
  //       return (
  //         <a>
  //           <img
  //             src={`https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg`}
  //           />
  //         </a>
  //       );
  //     },
  //     dots: true,
  //     dotsClass: "slick-dots slick-thumb",
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   };
  //   return (
  //     <div >
  //       <Slider {...settings}>
  //         <div>
  //           <img
  //             src={
  //               "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg"
  //             }
  //           />
  //         </div>
  //         <div>
  //           <img
  //             src={
  //               "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg"
  //             }
  //           />
  //         </div>
  //         <div>
  //           <img
  //             src={
  //               "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
  //             }
  //           />
  //         </div>
  //         <div>
  //           <img
  //             src={
  //               "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg"
  //             }
  //           />
  //         </div>
  //       </Slider>
  //     </div>
  //   );
  // }
  render() {
    return (
      <Carousel>
        <div>
          <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg" />
        </div>
        <div>
          <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg" />
        </div>
        <div>
          <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg" />
        </div>
      </Carousel>
    );
  }
}
