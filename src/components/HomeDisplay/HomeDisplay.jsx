import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { borderColor } from "../../style.golbal";

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
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        m={"auto"}
        p={5}
        // width={["95%", "80%", "80%", "80%"]} Default
        width={["95%", "50%", "50%", "80%"]} //Custom testing
        minHeight={"220px"}
        onClick={() => navigate("/allproducts")}
      >
        <Box overflow={"hidden"} position={"relative"}>
          <Image className="imageAnimation" src={images} alt={name} />
        </Box>
        <Box>
          <Text
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
            overflow={"hidden"}
            fontWeight={fname}
            maxW={200}
          >
            {name}
          </Text>
          <Text>Giá : {price ? price : "..."}</Text>
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
