import React from "react";
import {
  Box,
  // IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import {
  Carousel_color,
  Carousel_bgcolor,
  Carousel_Rpsize,
  Carousel_fontsize,
  Carousel_colortitle,
  Carousel_font,
} from "../../style.golbal";

// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
// import { Link } from "react-router-dom";

// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 5000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

export default function Carousel() {
  const [slider, setSlider] = React.useState(null);
  const [isLargerThan] = useMediaQuery("(min-width: 468px)");
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const mapUrl = `https://goo.gl/maps/bYnwcnxfrFgiQok58`;
  // const cards = [
  //   {
  //     id: 1000,
  //     title:
  //       "CHUYÊN SỈ CÁC MẶT HÀNG GIA DỤNG-ĐIỆN TỬ-KHUYẾN MÃI- HÀNG XU HƯỚNG",
  //     text: "ᴆɪ̣ᴀ ᴄʜɪ̉  :211/31 ᴍɪɴʜ ᴘʜᴜ̣ɴɢ , ᴘ9, ǫ6  ->Maps chỉ đường<-",
  //   },
  // ];

  return (
    // <Box
    //   border={"1px solid black"}
    //   position={"relative"}
    //   height={"auto"}
    //   width={"full"}
    //   overflow={"hidden"}
    // >
    //   {/* CSS files for react-slick */}
    //   <link
    //     rel="stylesheet"
    //     type="text/css"
    //     charSet="UTF-8"
    //     href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    //   />
    //   <link
    //     rel="stylesheet"
    //     type="text/css"
    //     href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    //   />
    //   {/* Left Icon */}
    //   {/* <IconButton
    //     aria-label="left-arrow"
    //     variant="ghost"
    //     position="absolute"
    //     left={side}
    //     top={top}
    //     transform={"translate(0%, -50%)"}
    //     zIndex={2}
    //     onClick={() => slider?.slickPrev()}
    //   >
    //     <BiLeftArrowAlt size="40px" />
    //   </IconButton> */}
    //   {/* Right Icon */}
    //   {/* <IconButton
    //     aria-label="right-arrow"
    //     variant="ghost"
    //     position="absolute"
    //     right={side}
    //     top={top}
    //     transform={"translate(0%, -50%)"}
    //     zIndex={2}
    //     onClick={() => slider?.slickNext()}
    //   >
    //     <BiRightArrowAlt size="40px" />
    //   </IconButton> */}
    //   {/* Slider */}
    //   {cards.map((card) => (
    //     <Box
    //       key={card.id}
    //       // height={["3xl", "4xl", "5xl", "6xl"]}
    //       height={"30rem"}
    //       // color="whitesmoke"
    //       position="relative"
    //       backgroundPosition="center"
    //       backgroundRepeat="no-repeat"
    //       backgroundSize="cover"
    //       // backgroundImage="linear-gradient(teal,skyblue,royalblue)"
    //     >
    //       {/* This is the block if we need to change, to customize the caption */}
    //       <Container
    //         // display={"flex"}
    //         justifyContent={"center"}
    //         size="container.lg"
    //         height="600px"
    //         m="auto"
    //         position="relative"
    //       >
    //         <Stack
    //           spacing={6}
    //           w={"full"}
    //           maxW={"lg"}
    //           position="absolute"
    //           top="50%"
    //           transform="translate(0, -50%)"
    //         >
    //           <Heading fontSize={{ base: "1xl", md: "3xl", lg: "4xl" }}>
    //             {card.title}
    //           </Heading>
    //           <Text fontSize={["sm", "md", "lg", "xl"]} color="">
    //             {card.text}
    //           </Text>
    //           <Flex gap={isLargerThan ? "2rem" : "1rem"} justify={"center"}>
    //             {/* <Button
    //                 fontSize={["xs", "sm", "md", "lg", "xl"]}
    //                 bg="black"
    //                 color="whitesmoke"
    //                 _hover={{
    //                   border: "1px solid black",
    //                   background: "none",
    //                   color: "blue",
    //                 }}
    //               > */}
    //             <Link to="/men">
    //               Zalo chốt đơn : 0907618986-0933770888-0903884900-0934456252
    //             </Link>
    //             {/* </Button> */}
    //             {/* <Button
    //                 fontSize={["10px", "sm", "md", "lg"]}
    //                 bg="black"
    //                 color="whitesmoke"
    //                 _hover={{
    //                   border: "1px solid black",
    //                   background: "none",
    //                   color: "blue",
    //                 }}
    //               > */}
    //             <Link to="/women">
    //               LH :0933456252 - MR Trường (Liên hệ khi bạn có thắc mắc cần
    //               giải đáp về hang hóa){" "}
    //             </Link>
    //             {/* </Button> */}
    //             {/* <Button
    //                 fontSize={["10px", "sm", "md", "lg"]}
    //                 bg="black"
    //                 color="whitesmoke"
    //                 _hover={{
    //                   border: "1px solid black",
    //                   background: "none",
    //                   color: "blue",
    //                 }}
    //               > */}
    //             <Link to="/shoes">Bảo hành sản phẩm sau 13h30 T2-T7 </Link>
    //             {/* </Button> */}
    //           </Flex>
    //         </Stack>
    //       </Container>
    //     </Box>
    //   ))}
    // </Box>
    <Box
      border={"1px solid black"}
      position={"relative"}
      height={"auto"}
      width={"full"}
      // overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <TableContainer>
        <Table overflow={"auto"}>
          <Thead>
            <Tr>
              <Th
                color={Carousel_color}
                backgroundColor={Carousel_bgcolor}
                fontSize={Carousel_Rpsize}
                wordwrap={"break-word"}
              >
                CHUYÊN SỈ CÁC MẶT HÀNG GIA DỤNG-ĐIỆN TỬ-KHUYẾN MÃI- HÀNG XU
                HƯỚNG
              </Th>
            </Tr>
          </Thead>
          <Tr>
            <Th
              color={Carousel_colortitle}
              fontSize={Carousel_fontsize}
              fontFamily={Carousel_font}
              borderColor="transparent"
              wordwrap={"break-word"}
            >
              Địa chỉ :211/31 MINH PHỤNG. P9, Q6 &#8594;{" "}
              <Link href={mapUrl} color="#337ab7" textDecoration={"none"}>
                Maps chỉ đường
              </Link>{" "}
              &#8592;
            </Th>
          </Tr>
          <Tr>
            <Th
              color={Carousel_colortitle}
              fontSize={Carousel_fontsize}
              fontFamily={Carousel_font}
              borderColor="transparent"
              wordwrap={"break-word"}
            >
              Zalo chốt đơn: 0907618986-0933770888-0903884900-0934456252
            </Th>
          </Tr>
          <Tr>
            <Th
              color={Carousel_color}
              fontSize={Carousel_fontsize}
              fontFamily={Carousel_font}
              borderColor="transparent"
              wordwrap={"break-word"}
            >
              LH :0933456252 - MR Trường (Liên hệ khi bạn có thắc mắc cần giải
              đáp về hàng hóa)
            </Th>
          </Tr>
          <Tr>
            <Th
              color={Carousel_colortitle}
              fontSize={Carousel_fontsize}
              fontFamily={Carousel_font}
              borderColor="transparent"
              wordwrap={"break-word"}
            >
              Bảo hành sản phẩm sau 13h30 T2-T7
            </Th>
          </Tr>
        </Table>
      </TableContainer>
    </Box>
  );
}
