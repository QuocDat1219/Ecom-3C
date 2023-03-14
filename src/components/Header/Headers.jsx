import {
    Box,
    Text,
    Flex,
    IconButton,
    Collapse,
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
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Search from "./Search";

const Header = (props) => {
    const { isOpen, onToggle } = useDisclosure();
    const animationKeyframes = keyframes`100% { transform: scale(0.8) rotate(10deg); border-radius: 100%; delay: 0s }`;
    const [isOpens, setIsOpens] = useState(false);
    const animation = `${animationKeyframes} 2s ease-in-out infinite`;
    const [isMobile] = useMediaQuery("(max-width: 1058px)");

    useEffect(() => {
        setIsOpens(false);
    }, [isMobile]);



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
                    <MobileNav data={props.data} />
                </Collapse>
                <Flex alignItems="center" h={"auto"} justifyContent={"space-around"}>
                    <Flex
                        alignItems={"center"}
                        flexDirection={isMobile ? "column" : "row"}
                    >
                        <Image
                            src={logomt}
                            alt="Logo"
                            w="240px"
                            h="75px
            "
                            mr="4"
                        />
                        <Search />
                    </Flex>
                    <Box
                        display={!isMobile ? "flex" : "none"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
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
        </>
    )
}

export default Header;