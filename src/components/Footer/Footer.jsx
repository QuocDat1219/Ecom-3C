import {
  Box,
  Flex,
  Img,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import portfolio from "../../img/portfolio.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { GiCondorEmblem } from "react-icons/gi";
import { Link } from "react-router-dom";
import dathongbao from "../../image/dathongbao.png"
const Footer = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [isSmallerThan] = useMediaQuery("(min-width: 468px)");

  return (
    <div className="Footer">
      <Box
        lineHeight={"1.42857143"}
        bgColor={"#f8f8f8"}
        pt="1rem"
        borderBottom={"1px solid #e5e5e5"}
        borderTop={"1px solid #e5e5e5"}
      >
        <Flex
          justify={"space-around"}
          width={["100%", "100%", "100%", "100%"]}
          textAlign={isSmallerThan ? "left" : "left"}
          fontSize={["sm", "md", "md", "md"]}
          flexDirection={isSmallerThan ? "row" : "column"}
        >
          <Box as={Flex} flexDirection="column">
            <Text fontWeight={"bold"} fontSize={"12px"}>
              SHOP MYTINDIGITAL
            </Text>
            <Text mt={"10px"}>
              Địa Chỉ : 211/31 Minh Phụng- Phường 9,, Quận 6, TP.HCM
            </Text>
            <Text mt={"10px"}>Đại Diện: Nguyễn Kiều Ngọc Hân</Text>
            <Text mt={"10px"}>Hotline: 093.3456.252</Text>
            <Text mt={"10px"} >
              MST: 0310731578 Nơi cấp: Chi cục thuế Q6, ngày cấp: 29/03/2011
            </Text>
            <Img
              mt={"10px"}
              w={"85px"}
              h={"33px"}
              verticalAlign={"slide"}
              src={dathongbao}
            ></Img>
          </Box>

          <Box>
            <Text
              textAlign={isSmallerThan ? "right" : "center"}
              fontSize={isSmallerThan ? "16px" : "15px"}
              pr={isSmallerThan ? "20px" : ""}
            >
              Copyright © 2015 by mytindigital. All Rights Reserved.
            </Text>

          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Footer;
