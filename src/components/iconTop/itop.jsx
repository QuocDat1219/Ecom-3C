import { Box, Flex, Image, Text, keyframes } from "@chakra-ui/react";
import React, { useState } from "react";
import tuananh from "../../image/tuananh.gif";
import { motion } from "framer-motion";
const Itop = () => {
  const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(400deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(400deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;
  const animation = `${animationKeyframes} 3s ease-in-out infinite`;
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    // <Flex justifyContent={"center"}>

    <Box
      onClick={scrollToTop}
      // as={motion.div}
      // animation={animation}
      // width="200px"
      // height="200px"
      // p={20}
      // display="fixed"
      // zIndex={"9999"}
    >
      <Image
        cursor={"pointer"}
        right={6}
        bottom={6}
        position={"fixed"}
        zIndex={"9999"}
        w={"100px"}
        h={"100px"}
        objectFit={"cover"}
        src={tuananh}
        _active={{
          transform: "rotate(400deg)",
        }}
      />
    </Box>
    // </Flex>
  );
};

export default Itop;
