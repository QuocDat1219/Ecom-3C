import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterData from "../Filter/Filters/FilterData";
import { getData } from "../redux/DataReducer/action";
import { Flex, Box, Spacer, Grid, Center, Text } from "@chakra-ui/react";
import ProductDis from "../components/ProductsDisplay/ProductDis";
import { useMediaQuery } from "@chakra-ui/react";
import Loading from "../components/Loading/Loading";
import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Truncate } from "@chakra-ui/react";
const ListProducts = ({ products }) => {
    const [isLargerThan] = useMediaQuery("(min-width: 768px)");
    const [isMedia] = useMediaQuery("(min-width: 768px)");
    const lProducts = useSelector((store) => store?.ListProductReducer?.listProduct)
    const dt = products.filter(product => product.idProductList == "dm3")
    console.log(dt)
    console.log(lProducts)
    return <>
        <Box width={isLargerThan ? "80%" : "100%"}  >
            {
                lProducts?.map(listProduct =>
                    <>
                        <Box
                            p={isLargerThan ? 0 : 2}
                            marginBottom={10}>
                            <Box bgColor={"#eee"} width={"100%"} h={"44px"} alignItems={"center"} display={"flex"} justifyContent={"flex-start"} marginBottom={"30px"} className="ec_title"
                                position={"relative"}
                                _after={{
                                    content: `" "`,
                                    width: "100%",
                                    backgroundColor: "#eeeeee",
                                    top: "0",
                                    position: "absolute",
                                    zIndex: 1,
                                    borderTop: "3px solid red !important",
                                }}
                            >
                                <Text
                                    isTruncated
                                    textOverflow={"ellipsis"}
                                    whiteSpace={"nowrap"}
                                    overflow={"hidden"}
                                    width={"100%"}
                                    fontSize={"18px"}
                                    color={"#333"}
                                    fontStyle={"bold"}
                                    paddingLeft={"80px"}
                                    alignItems={"center"}
                                    display={"flex"}
                                    justifyContent={"flex-start"}
                                    _after={{
                                        content: `" "`,
                                        w: "70px",
                                        h: "40px",
                                        alignItems: "center",
                                        border: "none !important",
                                        position: "absolute",
                                        backgroundImage: "https://mytindigital.com/images/fix-title-left.png",
                                        backgroundRepeat: "no-repeat",
                                        top: "0",
                                        left: "0",
                                        opacity: 1

                                    }}

                                >
                                    <Text

                                        isTruncated
                                        textOverflow={"ellipsis"}
                                        whiteSpace={"nowrap"}
                                        overflow={"hidden"}
                                        maxW={"800px"}

                                    >
                                        {listProduct?.name}
                                    </Text>
                                </Text>
                            </Box>
                            <Grid
                                templateColumns={
                                    isLargerThan ? "repeat(5, 1fr)" : "repeat(1, 1fr)"
                                }
                                gap={"5px"}
                            >
                                {
                                    products.filter(item => item.idProductList == listProduct.id).slice(0, 10)?.map((item) => {
                                        return <ProductDis key={item.id} item={item} />;
                                    })
                                }
                            </Grid>
                        </Box>
                    </>
                )
            }
        </Box>

    </>
}

export default ListProducts