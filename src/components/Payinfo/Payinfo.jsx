import { Box, Flex, Text } from "@chakra-ui/react";
import { Payinfo_color, Payinfo_size, Payinfo_font } from "../../style.golbal";
import Navbar from "../Header/Navbar";
import Itop from "../iconTop/itop";
import Loading from "../Loading/Loading";
const Payinfo = () => {
  return (
    <div>
      <Navbar /> <br />
      <Box w="80%" m="auto">
        <Itop />
        <Flex
          justifyContent={"left"}
          alignItems={"center"}
          textAlign="left"
          gap={20}
          padding={"5px"}
        >
          <Text
            fontSize={Payinfo_size}
            color={Payinfo_color}
            fontFamily={Payinfo_font}
          >
            <Text fontWeight={"bold"}>www.mytindigital.com</Text>
            <Text fontWeight={"bold"} pt={"5px"}>
              {" "}
              Phân Phối LK Giá sỉ{" "}
            </Text>
            ĐC : 211/31 Minh Phụng phường 9 quận 6
            <br />
            ĐT : 0933770888 -0933 456 252- 0907 618 986
          </Text>
        </Flex>
      </Box>
    </div>
  );
};
export default Payinfo;
