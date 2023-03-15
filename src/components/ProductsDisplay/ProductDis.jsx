import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  background,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AiOutlineStar } from "react-icons/ai";
import { StarIcon } from "@chakra-ui/icons";
import isLargerThan from "./ProductDis";
import {
  borderColor,
  colorHr,
  fsCard,
  fsCardTitle,
  priceColor,
  rspImageH,
  rspImageW,
  textColor,
} from "../../style.golbal";
const ProductDis = ({ item }) => {
  const navigate = useNavigate();
  const { _id, name, price, guarantee, imagesDefault} = item;
  // const images = imagesDetail[0].url;
  // console.log(images);
  // const [img, setImg] = useState(images[0]);
  const handleDes = () => {
    navigate(`/products/${_id}`);
  };

  // const ChangeHoverImage = () => {
  //   setImg(images[1]);
  // };
  // const OriginalImage = () => {
  //   setImg(images[0]);
  // };

  return (
    <Box display={"flex"} justifyContent={"center"} gap={2}>
      <Box
        borderRadius={5}
        border={borderColor}
        display={"flex"}
        p={"5"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        key={_id}
        width={"100%"}
        height={"280x"}
        // onMouseEnter={ChangeHoverImage}
        // onMouseLeave={OriginalImage}
        onClick={handleDes}
      >
        <Box
          overflow={"hidden"}
          position={"relative"}
          objectFit={"cover"}
          w={rspImageW}
          h={rspImageH}
          justifyContent={"center"}
          display={"flex"}
          marginBottom={"25px"}
        >
          <Image
            className="imageAnimation"
            w={"auto"}
            h={"auto"}
            objectFit={"cover"}
            src={imagesDefault}
            alt={name}
          />
        </Box>
        <Box>
          <Text
            textTransform={"uppercase"}
            color={textColor}
            fontSize={fsCard}
            fontWeight={"bold"}
          >
            {name ? name : "Đang cập nhật"}
          </Text>
        </Box>

        {/* Hr */}
        <Box w="100%" h="1px" margin={"10px"} bgColor={colorHr} />

        <HStack
          justify={"center"}
          textAlign={"center"}
          flexDirection={"column"}
        >
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Text fontWeight={"semibold"} fontSize={fsCard} color={textColor}>
              Mã sản phẩm :
            </Text>
            <Text fontSize={fsCard} color={textColor} marginLeft={"5px"}>
              {_id ? _id : " đang cập nhật"}
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Text fontWeight={"semibold"} fontSize={fsCard}>
              Giá :
            </Text>
            <Text
              fontWeight={"semibold"}
              fontSize={fsCardTitle}
              marginLeft={"2px"}
              color={priceColor}
            >
              {price ? price : " đang cập nhật"}
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Text fontWeight={"semibold"} fontSize={fsCard}>
              Bảo hành : {guarantee ? guarantee : " đang cập nhật"}
            </Text>
          </Box>
          {/* guarantee */}
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductDis;
