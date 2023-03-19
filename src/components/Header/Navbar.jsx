import {
  Box,
  Flex,
  Link,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import DesktopNav from "./DesktopNav";
import { useEffect, useState } from "react";
import Header from "./Headers";
import { getCategory } from "../../redux/Category/categorySlice";
import { useSelector, useDispatch } from "react-redux";

import {
  Navbar_bg_color,
  Navbar_text_default_color,
  Navbar_text_hover_color,
  Navbar_bg_hover_color
}
  from "../../style.golbal";



const Navbar = () => {
  const dispatch = useDispatch();
  const category = useSelector((store) => store?.category?.category);
  useEffect(() => {
    if (category?.length === 0) {
      dispatch(getCategory());
    }
  }, [dispatch, category?.length]);
  console.log(category);

  const [isOpens, setIsOpens] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 1058px)");

  useEffect(() => {
    setIsOpens(false);

  }, [isMobile]);


  const NAV_ITEMS = [
    {
      label: "DANH MỤC SẢN PHẨM",
      children: category,
    },
    {
      label: "HƯỚNG DẪN MUA HÀNG",
      href: "ShoppingGuide",
    },
    {
      label: "QUY ĐỊNH BẢO HÀNH CHUNG",
      href: "WarrantyPolicy",
    },
    {
      label: "THÔNG TIN THANH TOÁN",
      href: "Payinfo",
    },
    {
      label: "VỀ CHÚNG TÔI",
      href: "Aboutme",
    },
  ];
  console.log(NAV_ITEMS);

  return (
    <>
      <Header data={NAV_ITEMS} />
      <Box>
        <Flex
          bg={useColorModeValue(Navbar_bg_color, Navbar_bg_color)}
          color={useColorModeValue(Navbar_text_default_color, Navbar_text_default_color)}
          w={"100%"}
        >
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Flex
              display={{ base: "none", md: "flex" }}
              justifyContent={"center"}
              ml={"10%"}
              align={"center"}
            >
              <Link
                // p={2}
                fontWeight={"bold"}
                display={"block"}
                fontSize={"14px"}
                padding={"0px 20px"}
                lineHeight={"51px"}
                _hover={{
                  textDecoration: "none",
                  fontWeight: "100",
                }}
                href={"/allproducts"}
                bg={Navbar_bg_hover_color}
                color={Navbar_text_hover_color}
              >
                TRANG CHỦ
              </Link>
              <Box zIndex={9999}>
                <DesktopNav data={NAV_ITEMS} />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
export default Navbar;


