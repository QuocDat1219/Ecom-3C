import { Box, Flex, HStack, Icon, Image, Text, background } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AiOutlineStar } from "react-icons/ai";
import { StarIcon } from "@chakra-ui/icons";
import "./productDis.css"
const ProductDis = ({ item }) => {
  const navigate = useNavigate();
  const { id, name, price, guarantee, images } = item;
  // const [img, setImg] = useState(images[0]);
  const handleDes = () => {
    navigate(`/description/${id}`);
  };

  // const ChangeHoverImage = () => {
  //   setImg(images[1]);
  // };
  // const OriginalImage = () => {
  //   setImg(images[0]);
  // };


  return (
    <Box>
      <Box
        borderRadius={5}
        border={"1px solid #eeeeee"}
        display={"flex"}
        p={"5"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        key={id}
        width={"100%"}
        height={"280x"}
        // onMouseEnter={ChangeHoverImage}  
        // onMouseLeave={OriginalImage} 
        onClick={handleDes}
      >
        <Box overflow={"hidden"} position={"relative"} objectFit={"cover"} w={"192px"} h={"100px"} justifyContent={"center"} display={"flex"} marginBottom={"25px"}>
          <Image className="imageAnimation" w={"auto"} h={"auto"} objectFit={"cover"} src={images} alt={name} />
        </Box>
        <Box
        >
          <Text color={"#333"} fontSize={"14px"} fontWeight={"bold"} >{name}</Text>
        </Box>

        {/* Hr */}
        <Box w="100%" h="1px" margin={"10px"} bgColor={"#eeeeee"} />


        <HStack justify={"center"} flexDirection={"column"}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} >
            <Text fontWeight={"semibold"} fontSize={"14px"} color={"#333333"} >
              Mã sản phẩm :
            </Text>
            <Text fontSize={"14px"} color={"#333333"} marginLeft={"5px"}>
              {id ? id : " đang cập nhật"}
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Text fontWeight={"semibold"} fontSize={"14px"} >
              Giá :
            </Text>
            <Text fontWeight={"semibold"} fontSize={"16px"} marginLeft={"2px"} color={"red"}>
              {price ? price : " đang cập nhật"}
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Text fontWeight={"semibold"} fontSize={"14px"}>
              Bảo hành : {guarantee ? guarantee : " đang cập nhật"}
            </Text>
          </Box>
          {/* guarantee */}
        </HStack>
      </Box>
    </Box >
  );
};

export default ProductDis;
