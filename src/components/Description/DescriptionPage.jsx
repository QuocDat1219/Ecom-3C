import { AiFillHeart } from "react-icons/ai";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../redux/DataReducer/action";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { addToCart } from "../../redux/CartReducer/action";
import { addToWishList } from "../../redux/WishReducer/action";
import Navbar from "../Header/Navbar";
import DesProduct from "./DesProduct";
import CenterMode from "./Customimage";
import Relatedproducts from "./Relatedproducts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  colorName,
  colorTitle,
  DescriptionPage_fs,
  colorPage,
  DescriptionPage_size,
} from "../../style.golbal";
// import { BsBagFill } from "react-icons/bs";
const DescriptionPage = () => {
  const { id } = useParams();
  const toast = useToast();
  const products = useSelector((store) => store.dataReducer.products);
  const dispatch = useDispatch();
  const [currentProducts, setCurrentProducts] = useState({});
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [size, setSize] = useState(null);
  useEffect(() => {
    if (products.length === 0) {
      dispatch(getData());
    }
  }, [dispatch, products.length]);
  useEffect(() => {
    if (id) {
      const cur = products.find((item) => item.id === Number(id));
      cur && setCurrentProducts(cur);
    }
  }, [id, products]);

  const handleCart = () => {
    let payload = {
      ...currentProducts,
      size,
    };

    dispatch(addToCart(payload));
  };
  const handleWishList = () => {
    let payload = {
      ...currentProducts,
    };
    dispatch(addToWishList(payload, toast));
  };
  return (
    <div key={currentProducts.id}>
      <Navbar /> <br />
      <Box w="80%" m="auto">
        <Flex
          justify={"space-between"}
          flexDirection={isLargerThan ? "row" : "column"}
        >
          {/* <Box width={["100%", "100%", "60%", "60%"]} min-height={"100vh"}> */}
          {/* ------------------------------ 1 image------------------------------------ */}
          {/* <Box>
            <Image w={"100%"} src={currentProducts.images?.[0]} />
          </Box> */}

          {/* ------------------------------ 4 images------------------------------------ */}

          {/* <Box>
            <Flex>
              <Box>
                <Image src={currentProducts.images?.[1]} />
              </Box>
              <Box>
                <Image src={currentProducts.images?.[2]} />
              </Box>
            </Flex>
            <Flex>
              <Box>
                <Image src={currentProducts.images?.[3]} />
              </Box>
              <Box>
                <Image src={currentProducts.images?.[4]} />
              </Box>
            </Flex>
          </Box> */}

          {/* --------------------------------------------------------------------- */}
          {/* </Box> */}

          {/* ------------------------------details Box------------------------------------ */}
          <Box
            width={["100%", "100%", "35%", "35%"]}
            min-height={"100vh"}
            textAlign={"left"}
            my={"6"}
            // paddingLeft={"80px"}
            // paddingRight={"80px"}
          >
            <Box>
              <Heading>Bể bơi 3 tầng 1M5 </Heading>
              <Box mx={"1"} my={"2"} fontSize={["sm", "md", "lg", "xl"]}>
                <Text fontSize={DescriptionPage_size}>
                  Mã sản phẩm:
                  <span style={{ textDecoration: "line-through" }}>
                    {/* {currentProducts.original_price}.00 */}
                  </span>
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      marginLeft: "5px",
                    }}
                  >
                    {/* {currentProducts.final_price}.50 */}
                  </span>
                </Text>
                <Text
                  fontSize={DescriptionPage_size}
                  color={colorPage}
                  fontWeight={"bold"}
                >
                  Giá :
                  <span style={{ textDecoration: "line-through" }}>
                    {/* {currentProducts.original_price}.00 */}
                  </span>
                  <span
                    style={{
                      color: "colorPage",
                      fontWeight: "bold",
                      marginLeft: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {/* {currentProducts.final_price}.50 */}
                  </span>
                </Text>
                <Box pb={["10%", "5%", "5%", "5%"]}>
                  <Box
                    textAlign={"center"}
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    position={"relative"}
                    mt={"5%"}
                  >
                    <Text
                      position={"absolute"}
                      height={"2px"}
                      bgColor={colorPage}
                      width={"100%"}
                      top={"50%"}
                      left={"0"}
                      fontWeight={"bold"}
                      zIndex={1}
                      marginTop={"-1px"}
                    ></Text>
                    <Text
                      display={"inline-block"}
                      background={"#fff"}
                      position={"relative"}
                      zIndex={10}
                      fontSize={DescriptionPage_fs}
                      padding={"0 10px"}
                      color={colorName}
                    >
                      Thông tin - tính năng
                    </Text>
                  </Box>
                </Box>

                <Box display={"inline-block"}>
                  <a href="https://apps.apple.com/us/app/mytindigital/id1372586342?ls=1">
                    <img
                      height={"auto !important"}
                      maxwidth={"100% !important"}
                      width={"40%"}
                      src="https://mytindigital.com/images/logo/app-store.jpg"
                      alt="App Store"
                    />
                  </a>
                </Box>
                <Text
                  fontSize={DescriptionPage_fs}
                  fontWeight={"bold"}
                  color={colorTitle}
                >
                  Đặt hàng qua app để được giao tận nơi
                </Text>
                <Box display={"inline-block"}>
                  <a href="https://zalo.me/g/bojslq853">
                    <img
                      height={"auto !important"}
                      maxwidth={"100% !important"}
                      width={"40%"}
                      src="https://mytindigital.com/images/logo/zalo_chuyensi_mytin.png"
                      alt="Mỹ tín chuyên sỉ"
                    />
                  </a>
                </Box>
                <Text
                  fontSize={DescriptionPage_fs}
                  fontWeight={"bold"}
                  color={colorTitle}
                >
                  Nhóm sỉ zalo cập nhật giá tốt mỗi ngày
                </Text>
              </Box>
              {/* <Box mt="3rem" align={"left"}>
              <Button
                width={["100%", "100%", "70%", "70%"]}
                bg="black"
                color={"whitesmoke"}
                colorScheme={"blackAlpha"}
                disabled={!size}
                onClick={handleCart}
              >
                {!size ? "Please Select A Size" : "ADD TO BAG"}
              </Button>
            </Box> */}
              {/* <Box mt="1rem" align={"left"}>
              <Button
                width={["100%", "100%", "70%", "70%"]}
                bg="white"
                border={"1px solid black"}
                color="black"
                onClick={handleWishList}
              >
                ADD TO FAVOURITE <AiFillHeart color="red" size={"20px"} />
              </Button>
            </Box> */}
            </Box>

            {/* ------------------------------details Box End------------------------------------ */}

            {/* ------------------------------description Box------------------------------------ */}
            {/* <Box mt={"5rem"} align={"left"} mx={"4"}>
            <Badge ml="1" fontSize="1rem" colorScheme="blackAlpha">
              Description :
            </Badge>

            <UnorderedList spacing={"3"} my={"4"}>
              <ListItem fontSize={"md"} fontWeight={"semibold"}>
                Gender : {currentProducts.gender}{" "}
              </ListItem>
              <ListItem fontSize={"md"} fontWeight={"semibold"}>
                Colour : {currentProducts.color}{" "}
              </ListItem>
              <ListItem fontSize={"md"} fontWeight={"semibold"}>
                Rating : {currentProducts.rating}{" "}
              </ListItem>
            </UnorderedList>
          </Box> */}
          </Box>
          <Box w={"50%"} maxW={"768px"} min-height={"100vh"} minW={"300px"}>
            <CenterMode />
          </Box>
        </Flex>
        <Box marginTop={"5%"}>
          <DesProduct />
        </Box>
        <Box marginTop={"5%"}>
          <Relatedproducts />
        </Box>
      </Box>
    </div>
  );
};

export default DescriptionPage;
