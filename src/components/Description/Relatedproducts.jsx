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
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  OrderedList,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import {
  colorName,
  colorTitle,
  DescriptionPage_fs,
  colorPage,
  DescriptionPage_size,
  Relatedproducts_pt,
  Relatedproducts_pb,
} from "../../style.golbal";
const Relatedproducts = ({ currentProducts }) => {
  const dispatch = useDispatch();
 

  // const mensD = useSelector((store) => store.pagesReducer.mensD);
  const mensD = useSelector((store) => store?.dataReducer?.products);
  console.log(mensD);
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
    if (mensD?.length === 0) {
      dispatch(getMensData());
    }
  }, [dispatch, mensD?.length]);
  return (
    <div>
      <Box position={"relative"}>
        <Box
          display={"flex"}
          justifyContent={"left"}
          alignItems={"center"}
          fontWeight={"bold"}
          pt={Relatedproducts_pt}
          pb={Relatedproducts_pb}
        >
          <Text
            position={"relative"}
            height={"2px"}
            bgColor={colorPage}
            width={"100%"}
            top={"50%"}
            fontWeight={"bold"}
            zIndex={1}
          ></Text>

          <Text
            wordwrap={""}
            position={"absolute"}
            textColor={colorName}
            fontSize={DescriptionPage_fs}
            backgroundColor={"#fff"}
            p={("0", "10px")}
            zIndex={9999}
          >
            CÁC SẢN PHẨM LIÊN QUAN
          </Text>
        </Box>
        <Slider {...settings} ref={sliderRef}>
          {mensD?.length > 0 &&
            mensD.map((item) => {
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
    </div>
  );
};

export default Relatedproducts;
