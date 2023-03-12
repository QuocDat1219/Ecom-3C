import { Flex, Text, Stack, Link, useColorModeValue } from "@chakra-ui/react";

import MobileNavItem from "./MobileNavItem";

const MobileNav = (props) => {
 

  return (
    <Stack
      bg={useColorModeValue("#1d3c84", "#1d3c84")}
      display={{ md: "none" }}
    >
      <Stack>
        <Flex
          p={2}
          as={Link}
          bg={"#ff0"}
          href={"/allproducts"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text bg={"#ff0"} fontWeight={300} color={"#1d3c84"}>
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
