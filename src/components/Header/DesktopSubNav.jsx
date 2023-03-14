import {
  Box,
  Flex,
  Text,
  Stack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  Navbar_bg_color,
  Navbar_text_default_color,
  Navbar_text_hover_color,
  Navbar_bg_hover_color
}
  from "../../style.golbal";


const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={3}
      borderBottom={"1px solid white"}
      _hover={{
        bg: useColorModeValue(Navbar_bg_hover_color,Navbar_bg_hover_color),
        color: Navbar_text_hover_color,
      }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#ff0.400" }}
            fontWeight={500}
            display={"block"}
          >
            {label}
          </Text>
        
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
         
        </Flex>
      </Stack>
    </Link>
  );
};

export default DesktopSubNav;
