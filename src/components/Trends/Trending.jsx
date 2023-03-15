import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getMensData } from "../../redux/PagesReducer/action";
import { HomeDis } from "../HomeDisplay/HomeDisplay";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  fsCardTitle,
  gotoNext,
  gotoPrev,
  settings,
  textColor,
  titleColor,
} from "../../style.golbal";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { getCategory } from "../../redux/Category/categorySlice";
import { getProducts } from "../../redux/Products/productSlice";
const Trending = () => {
  const dispatch = useDispatch();
  useEffect(() => {
  })
  // const mensD = useSelector((store) => store.pagesReducer.mensD);
  // const mensD = useSelector((store) => store?.dataReducer?.products);

  const category = useSelector((store) => store?.category?.category)
  const products = useSelector((store) => store?.product?.products);


  console.log("new" , products)
  // console.log(mensD);
  /**
   * Test data
   */
  /**
   * End test data
   * */
  const sliderRef = useRef();
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };
  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products?.length]);
  return (
    <div>
      <Box position={"relative"}>
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
        <Slider {...settings} ref={sliderRef}>
          {products?.length > 0 &&
            products?.map((item) => {
              return <HomeDis key={item.key} item={item} />;
            })}
        </Slider>
        <Box>
          <Text
            onClick={gotoNext}
            _after={{
              content: "'  '",
              position: "absolute",
              // bgColor: "black",
              bg: "url(https://mytindigital.com/images/next.png)",
              backgroundImag: "url('image.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundObjectFit: "cover",
              right: 0,
              top: "50%",
              zIndex: 1,
              w: "40px",
              h: "40px",
              cursor: "pointer",
            }}
          ></Text>
          <Text
            onClick={gotoPrev}
            _after={{
              content: "'  '",
              position: "absolute",
              // bgColor: "black",
              bg: "url(https://mytindigital.com/images/prev.png)",
              backgroundImag: "url('image.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundObjectFit: "cover",
              left: 0,
              top: "50%",
              zIndex: 1,
              w: "40px",
              h: "40px",
              cursor: "pointer",
            }}
          ></Text>
        </Box>
      </Box>
      {/* <Box
        position={"absolute"}
        _after={{
          content: "' '",
          position: "absolute",
          color: "red",
          bgColor: "yellow",
          top: "-150px",
          left: 0,
          zIndex: -1,
          w: 10,
          h: 10,
        }}
      ></Box> */}
    </div>
  );
};

export default Trending;
