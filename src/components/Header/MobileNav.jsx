import { Flex, Text, Stack, Link, useColorModeValue } from "@chakra-ui/react";
import MobileNavItem from "./MobileNavItem";
import { Navbar_bg_color ,Navbar_text_default_color,Navbar_text_hover_color , Navbar_bg_hover_color} from "../../style.golbal";

const MobileNav = (props) => {
 

  return (
    <Stack
      bg={useColorModeValue(Navbar_bg_color, Navbar_bg_color)}
      display={{ md: "none" }}
    >
      <Stack>
        <Flex
          p={2}
          as={Link}
          bg={Navbar_bg_hover_color}
          href={"/allproducts"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text bg={Navbar_bg_hover_color} fontWeight={300} color={Navbar_text_default_color}>
            TRANG CHỦ
          </Text>
        </Flex>
      </Stack>
      {props.data.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
