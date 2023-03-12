import {
  Box,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";

import DesktopSubNav from "./DesktopSubNav";

const DesktopNav = (props) => {
  return (
    <Stack direction={"row"}>
      {props.data.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                // p={2}
                fontWeight={"bold"}
                display={"block"}
                fontSize={"14px"}
                padding={"0px 20px"}
                lineHeight={"51px"}
                _hover={{
                  textDecoration: "none",
                  bg: "#ff0",
                  color: "#1d3c84",
                }}
                href={navItem.href ?? "#"}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {/* Nav li */}
            {navItem.children && (
              <PopoverContent
                textAlign={"left"}
                // border={0}
                // boxShadow={"xl"}
                border={"1px solid black"}
                // p={4}
                bg={"#1d3c84"}
                // p={4}
                fontSize={"14px"}
                // rounded={"xl"}
                rounded={"none"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
