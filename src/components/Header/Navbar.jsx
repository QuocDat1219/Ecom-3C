import {
  Box,
  Text,
  Flex,
  IconButton,
  Collapse,
  Link,
  useColorModeValue,
  useDisclosure,
  Button,
  Input,
  Image,
  Img,
  keyframes,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import logomt from "../../image/logomt.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const animationKeyframes = keyframes`
  100% { transform: scale(0.8) rotate(10deg); border-radius: 100%; delay: 0s }
`;

  const [isOpens, setIsOpens] = useState(false)
  const [isMobile] = useMediaQuery("(max-width: 1058px)")

  useEffect(() => {
    setIsOpens(false)
  }, [isMobile])

  const animation = `${animationKeyframes} 2s ease-in-out infinite`;
  return (
    <>
      <Box>
        <Flex
          flex={{ base: 3, md: "auto" }}
          ml={{ base: 1 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={8} h={8} />
              ) : (
                <HamburgerIcon w={10} h={10} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav data={NAV_ITEMS} />
        </Collapse>
        <Flex alignItems="center" h={"auto"} justifyContent={"space-around"} >


          <Flex alignItems={"center"} flexDirection={isMobile ? "column" : "row"}>
            <Image src={logomt} alt="Logo" w="240px" h="75px
            " mr="4" />
            <Flex w={["80%", "100%", "100%", "100%"]} >
              <Input
                placeholder="Tìm kiếm sản phẩm"
                borderColor={"#ee1c25"}
                border={"2px"}
                rounded={"none"}
                h={"34px"}
              />
              <Button
                rounded={"none"}
                bg={"#ee1c25"}
                color={"white"}
                fontWeight={"bold"}
                h={"34px"}
                fontSize={"22px"}
              >
                <SearchIcon></SearchIcon>
              </Button>
            </Flex>
          </Flex>
          <Box display={!isMobile ? "flex" : "none"} justifyContent={"center"} alignItems={"center"}>
            <Box
              borderRadius={"100%"}
              p={"5px"}
              h={"40px"}
              mr={"20px"}
              bgColor={"red"}
              maxW={"40px"}
              as={motion.div}
              animation={animation}
              padding="2"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              display="flex"
            >
              <Img
                maxW={"100%"}
                verticalAlign={"slide"}
                src="https://mytindigital.com/images/phone-trans.png"
              ></Img>
            </Box>
            <Flex textAlign={"left"} flexDirection="column">
              <Text fontSize={"17px"} color={"#f44242"} fontWeight={"700"}>
                HOTLINE
              </Text>
              <Text fontSize="17px" fontWeight="bold">
                0933770 888
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex
          bg={useColorModeValue("#1d3c84", "#1d3c84")}
          color={useColorModeValue("White", "White")}
          w={"100%"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
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
                  fontWeight:"100"
                }}
                href={"/allproducts"}
                bg={"#ff0"}
                color={"#1d3c84"}
              >
                TRANG CHỦ
              </Link>
              <DesktopNav data={NAV_ITEMS} />
            </Flex>
          </Flex>
        </Flex>

      </Box>
    </>
  );
};
export default Navbar;

const NAV_ITEMS = [
  {
    label: "DANH MỤC SẢN PHẨM",
    children: [
      {

        label:
          "HÀNG MỚI VỀ - SẢN PHÂM THEO MÙA - CẬP NHẬT MỖI NGÀY- KÍCH XEM ĐẦY ĐỦ",
        href: "#",
      },
      {
        // label: "Freelance Projects",
        label: "HÀNG THÁI HÀN NHẬT _ NHẬP KHẨU GIÁ ƯU ĐÃI -> BẤM XEM THÊM  ",
        href: "#",
      },
      {
        // label: "Freelance Projects",
        label: "HÀNG THÁI HÀN NHẬT _ NHẬP KHẨU GIÁ ƯU ĐÃI -> BẤM XEM THÊM  ",
        href: "#",
      },
      {
        // label: "Freelance Projects",
        label: "HÀNG THÁI HÀN NHẬT _ NHẬP KHẨU GIÁ ƯU ĐÃI -> BẤM XEM THÊM  ",
        href: "#",
      },
      {
        // label: "Freelance Projects",
        label: "HÀNG THÁI HÀN NHẬT _ NHẬP KHẨU GIÁ ƯU ĐÃI -> BẤM XEM THÊM  ",
        href: "#",
      },
      {
        // label: "Freelance Projects",
        label: "HÀNG THÁI HÀN NHẬT _ NHẬP KHẨU GIÁ ƯU ĐÃI -> BẤM XEM THÊM  ",
        href: "#",
      },
      {
        // label: "Freelance Projects",
        label: "HÀNG THÁI HÀN NHẬT _ NHẬP KHẨU GIÁ ƯU ĐÃI -> BẤM XEM THÊM  ",
        href: "#",
      },
      {
        // label: "Freelance Projects",
        label: "HÀNG THÁI HÀN NHẬT _ NHẬP KHẨU GIÁ ƯU ĐÃI -> BẤM XEM THÊM  ",
        href: "#",
      },
      {
        // label: "Freelance Projects",
        label: "HÀNG THÁI HÀN NHẬT _ NHẬP KHẨU GIÁ ƯU ĐÃI -> BẤM XEM THÊM  ",
        href: "#",
      },
      {
        // label: "Freelance Projects",
        label: "HÀNG THÁI HÀN NHẬT _ NHẬP KHẨU GIÁ ƯU ĐÃI -> BẤM XEM THÊM  ",
        href: "#",
      },
      {
        // label: "Freelance Projects",
        label: "HÀNG THÁI HÀN NHẬT _ NHẬP KHẨU GIÁ ƯU ĐÃI -> BẤM XEM THÊM  ",
        href: "#",
      },
      {
        // label: "Freelance Projects",
        label: "HÀNG THÁI HÀN NHẬT _ NHẬP KHẨU GIÁ ƯU ĐÃI -> BẤM XEM THÊM  ",
        href: "#",
      },
      {
        // label: "Freelance Projects",
        label: "HÀNG THÁI HÀN NHẬT _ NHẬP KHẨU GIÁ ƯU ĐÃI -> BẤM XEM THÊM  ",
        href: "#",
      },
      {
        // label: "Freelance Projects",
        label: "HÀNG THÁI HÀN NHẬT _ NHẬP KHẨU GIÁ ƯU ĐÃI -> BẤM XEM THÊM  ",
        href: "#",
      },

    ],
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
