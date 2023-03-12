import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  // Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import portfolio from "../../img/portfolio.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { GiCondorEmblem } from "react-icons/gi";
import { Link } from "react-router-dom";
const Footer = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [isSmallerThan] = useMediaQuery("(min-width: 468px)");

  return (
    <div className="Footer">
      <Box
        lineHeight={"1.42857143"}
        bgColor={"#f8f8f8"}
        // height={isSmallerThan ? "30vh" : "30vh"}
        pt="1rem"
        borderBottom={"1px solid #e5e5e5"}
        borderTop={"1px solid #e5e5e5"}
      >
        <Flex
          justify={"space-evenly"}
          width={["100%", "100%", "100%", "100%"]}
          textAlign={isSmallerThan ? "left" : "center"}
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
            <Text mt={"10px"} mb={"30px"}>
              MST: 0310731578 Nơi cấp: Chi cục thuế Q6, ngày cấp: 29/03/2011
            </Text>
          </Box>

          {/* {isSmallerThan ? (
            <Box>
              <Heading>Support</Heading>
              <Text>Help</Text>
              <Text>Customer Service</Text>
              <Text>Shipping</Text>
              <Text>Order Tracker</Text>
              <Text>Returns & Exchanges</Text>
            </Box>
          ) : null}

          {isLargerThan ? (
            <Box>
              <Heading>Company Info</Heading>
              <Text>About Us</Text>
              <Text>Entity Details</Text>
              <Text>Careers</Text>
              <Text>Company Apps</Text>
            </Box>
          ) : null} */}
          <Box>
            <Text
              textAlign={isSmallerThan ? "right" : "center"}
              fontSize={isSmallerThan ? "16px" : "15px"}
              pr={isSmallerThan ? "20px" : ""}
            >
              Copyright © 2015 by mytindigital. All Rights Reserved.
            </Text>

            {/* <a
              href="https://www.linkedin.com/in/naresh-rajput/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={9} h={9} my="1rem" as={BsLinkedin} />
            </a>
            <a
              href="https://github.com/nmewada01"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={9} h={9} my="1rem" as={BsGithub} />
            </a>
            <a
              href="https://nmewada01.github.io/portfolio/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Avatar w={10} h={10} my="1rem" bg="white" src={portfolio} />
            </a> */}
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Footer;
