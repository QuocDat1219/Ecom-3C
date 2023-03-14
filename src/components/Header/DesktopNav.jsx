import {
  Box,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import {
  Navbar_bg_color,
  Navbar_text_default_color,
  Navbar_text_hover_color,
  Navbar_bg_hover_color
}
  from "../../style.golbal";
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
                color= {Navbar_text_default_color}
                _hover={{
                  textDecoration: "none",
                  bg: Navbar_bg_hover_color,
                  color: Navbar_text_hover_color,
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
                border={"1px solid black"}
                bg={Navbar_bg_color}
                fontSize={"14px"}
                rounded={"none"}
                minW={"sm"}
                color= {Navbar_text_default_color}
              >
                <Stack css={{
                  "&::-webkit-scrollbar": {
                    width: "4px",
                  },
                  "&::-webkit-scrollbar-track": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: Navbar_text_default_color,
                    borderRadius: "24px",
                  },
                }}
                  overflowX="auto"
                  maxHeight="400px">
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
