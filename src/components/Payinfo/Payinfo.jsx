import { Box, Flex, Text } from "@chakra-ui/react";
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
          <Text fontSize={"16px"} color={"#33997f"} fontFamily={"Helvetica Neue, Helvetica, Arial, sans-serif;"}>
            <Text fontWeight={"bold"}>www.mytindigital.com</Text>
            <Text fontWeight={"bold"}> Phân Phối LK Giá sỉ </Text>
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
