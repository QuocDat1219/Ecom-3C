import { Box, Flex, Grid, Spacer, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Header/Navbar";
import ProductDis from "../components/ProductsDisplay/ProductDis";
import FilterData from "../Filter/Filters/FilterData";
import { useParams } from "react-router-dom";
import { getAProducts, getProducts } from "../redux/Products/productSlice";
import { getCategory } from "../redux/Category/categorySlice";
const AllwomensD = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store?.category?.isLoading);
  const [currentProducts, setCurrentProducts] = useState({});
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const { id } = useParams();
  const products = useSelector((store) => store?.product?.products);
  const category = useSelector((store) => store?.category?.category);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getCategory());
      dispatch(getProducts());
    }
    if (id) {
      const cur = products.filter((item) => item.idCategory === Number(id));
      cur && setCurrentProducts(cur);
    }
  }, [id, products.length]);
  console.log("currentProducts", currentProducts);
  return (
    <div className="AllwomensD">
      <Navbar /> <br />
      {loading ? (
        <Loading />
      ) : (
        <Flex flexDirection={isLargerThan ? "row" : "column"}>
          <Box w={isLargerThan ? "15%" : "100%"}>{/* <FilterData /> */}</Box>
          <Spacer />
          <Box width={isLargerThan ? "80%" : "100%"}>
            <Grid
              templateColumns={
                isLargerThan ? "repeat(3, 1fr)" : "repeat(2, 1fr)"
              }
              gap={"5px"}
            >
              {currentProducts?.length > 0 &&
                currentProducts.map((item) => {
                  return <ProductDis key={item.key} item={item} />;
                })}
            </Grid>
          </Box>
        </Flex>
      )}
    </div>
  );
};

export default AllwomensD;
