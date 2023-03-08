import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getMensData } from "../../redux/PagesReducer/action";
import { HomeDis } from "../HomeDisplay/HomeDisplay";
import {
  fsCardTitle,
  settings,
  textColor,
  titleColor,
} from "../../style.golbal";
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
