import React from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  OrderedList,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../redux/DataReducer/action";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { addToCart } from "../../redux/CartReducer/action";
import { addToWishList } from "../../redux/WishReducer/action";
import Navbar from "../Header/Navbar";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import { fsCard, titleColor } from "../../style.golbal";

const DesProduct = () => {
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        fontWeight={"bold"}
        pt={["15%", "5%", "0", "0"]}
      >
        <Text
          position={"relative"}
          height={"2px"}
          bgColor={"#ed1c24"}
          width={"100%"}
          top={"50%"}
          fontWeight={"bold"}
          zIndex={1}
        ></Text>

        <Text
          wordwrap={""}
          position={"absolute"}
          textColor={"#263790"}
          fontSize={["14px", "14px", "16px", "18px"]}
          backgroundColor={"#fff"}
          p={("0", "10px")}
          zIndex={9999}
        >
          MÔ TẢ SẢN PHẨM
        </Text>
      </Box>
      <Flex
        mt={12}
        alignItems={"center"}
        justifyContent={"center"}
        textColor={titleColor}
        fontSize={["14px", "14px", "14px", fsCard]}
      >
        <List textAlign={"start"}>
          <ListItem>
            HẠN SỬ DỤNG : Sử dụng dài hạn
            <UnorderedList textAlign={"start"} lineHeight={[8, 8, 8, 10]}>
              <ListItem>
                {" "}
                Là loại thuốc diệt chuột đa liều, khi chuột ăn phải sẽ chết sau
                từ 1 đến 3 ngày.{" "}
              </ListItem>
              <ListItem>
                Sau khi ăn thuốc, chuột sẽ không có biểu hiện khác thường, chuột
                và đồng loại kéo tới tiếp tục ăn thuốc mà không có sự đề phòng.
              </ListItem>
              <ListItem>
                Thuốc diệt chuột Thái chứa chất Warfarin khiến chuột xuất huyết
                ở mắt, do đó chuột sẽ có xu hướng tìm ra chỗ sáng, nên rất dễ
                cho ta xử lý xác chuột
              </ListItem>
              <ListItem>
                Thuốc có hương vị đặc trưng hấp dẫn loài chuột dễ dàng tiêu diệt
                cả đàn chuột khỏi gia đình bạn.
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            HƯỚNG DẪN SỬ DỤNG :
            <UnorderedList textAlign={"start"} lineHeight={[8, 8, 8, 10]}>
              <ListItem>
                Bóc lớp bọc hộp thuốc, đặt ở nơi có nhiều chuột.
              </ListItem>
              <ListItem>
                Sau khi ăn thuốc, chuột sẽ không có biểu hiện khác thường, chuột
                và đồng loại kéo tới tiếp tục ăn thuốc mà không có sự đề phòng.
              </ListItem>
              <ListItem>
                Đặt 10-15 viên, mỗi đĩa cách nhau ít nhất 1 mét.
              </ListItem>
              <ListItem>
                Nên đặt thuốc ở nơi chuột hay xuất hiện hoặc trên đường đi kiếm
                ăn hàng ngày của chúng. Chuột sẽ ăn hoặc tha mồi về tổ rồi ăn và
                cùng chết.
              </ListItem>
            </UnorderedList>
          </ListItem>
        </List>
      </Flex>
    </div>
  );
};

export default DesProduct;
