import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  bderRCard,
  borderColor,
  colorHr,
  fontWgolbal,
  fsCard,
  fsCardTitle,
  priceColor,
  rspImageH,
  rspImageSlH,
  rspImageSlW,
  rspImageW,
  textLongMaxWidthSl,
} from "../../style.golbal";

export const HomeDis = ({ item }) => {
  const navigate = useNavigate();
  // const { id, name, color, gender, images } = item;
  const { id, name, color, gender, images, price } = item;

  // const [img, setImg] = useState(images[0]);
  const [fname, setFname] = useState("normal");

  // const ChangeHoverImage = () => {
  //   setImg(images[1]);
  //   setFname("bold");
  // };
  // const OriginalImage = () => {
  //   setImg(images[0]);
  //   setFname("normal");
  // };

  return (
    <div
      key={id}
      // onMouseEnter={ChangeHoverImage}
      // onMouseLeave={OriginalImage}
    >
      <Box
        border={borderColor}
        borderRadius={bderRCard}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        m={"auto"}
        p={5}
        // width={["95%", "80%", "80%", "80%"]} Default
        width={rspImageSlW} //Custom testing
        minHeight={rspImageSlH}
        onClick={() => navigate("/allproducts")}
      >
        <Box overflow={"hidden"} position={"relative"}>
          <Image
            w={"auto"}
            h={"auto"}
            objectFit={"cover"}
            className="imageAnimation"
            src={images}
            alt={name}
          />
        </Box>
        <Box>
          <Text
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
            overflow={"hidden"}
            maxW={textLongMaxWidthSl}
            fontWeight={"bold"}
            fontSize={"14px"}
            textTransform={"uppercase"}
            p={3}
          >
            {name}
          </Text>
          <Box w="100%" h="1px" margin={"10px"} bgColor={colorHr} />
          <Text
            display={"flex"}
            justifyContent={"center"}
            textAlign={"center"}
            fontWeight={"semibold"}
            fontSize={fsCard}
          >
            Giá :{" "}
            <Text ml={1} color={priceColor}>
              {price ? price : "đang cập nhật"}
            </Text>
          </Text>
          {/* <Text>
          {color} || {gender}
        </Text> */}
        </Box>
      </Box>
    </div>
  );
};

// const handleDes = () => {
//   navigate(`/description/${id}`);
// };
