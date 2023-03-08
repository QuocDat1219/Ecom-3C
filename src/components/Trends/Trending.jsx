import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getMensData } from "../../redux/PagesReducer/action";
import { HomeDis } from "../HomeDisplay/HomeDisplay";
import { fsCardTitle, textColor, titleColor } from "../../style.golbal";
const Trending = () => {
  const dispatch = useDispatch();
  const mensD = useSelector((store) => store.pagesReducer.mensD);

  /**
   * Test data
   */

  /**
   * End test data
   * */

  useEffect(() => {
    if (mensD?.length === 0) {
      dispatch(getMensData());
    }
  }, [dispatch, mensD?.length]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Box>
        <Heading
          // m={3}
          lineHeight={"50px"}
          align={"center"}
          fontSize={"25px"}
          color={titleColor}
          fontStyle={"bold"}
          fontWeight={400}
        >
          {" "}
          SẢN PHẨM MỚI{" "}
        </Heading>
        <Slider {...settings}>
          {mensD?.length > 0 &&
            mensD.map((item) => {
              return <HomeDis key={item.key} item={item} />;
            })}
        </Slider>
      </Box>
    </div>
  );
};

export default Trending;
