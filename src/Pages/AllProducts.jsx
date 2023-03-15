import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterData from "../Filter/Filters/FilterData";
import { getData, getaData } from "../redux/DataReducer/action";
import { getListData } from "../redux/ListProductReducer/action";

import Itop from "../components/iconTop/itop";
import {
  Flex,
  Box,
  Spacer,
  Grid,
  Center,
  Text,
  Button,
} from "@chakra-ui/react";
import ProductDis from "../components/ProductsDisplay/ProductDis";
import { useMediaQuery } from "@chakra-ui/react";
import Loading from "../components/Loading/Loading";
import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import ListProducts from "../components/ListProductsCart/ListProducts";
import Trending from "../components/Trends/Trending";
import Carousel from "../components/Carousel/Carousel";
import { rspImageH } from "../style.golbal";
import { store } from "../redux/store";
import { getAProducts, getProducts } from "../redux/Products/productSlice";
import { getCategory } from "../redux/Category/categorySlice";
// import Paginate from "../components/Paginatation/Paginate";
//import FilterChecked from "../Filter/Filters/FilterChecked";
const AllProducts = () => {
  const dispatch = useDispatch();

  // const products = useSelector((store) => store?.dataReducer?.products);
  // const category = useSelector((store) => store?.

  const loading = useSelector((store) => store?.category?.isLoading);
  const [searchParams] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(1);
  const [openFilterData, setOpenFilterData] = useState(false);
  const location = useLocation();

  const [isLargerThan] = useMediaQuery("(min-width: 768px)");

  // useEffect(() => {
  //   dispatch(getProducts());
  //   // dispatch(getaData(14));
  //   dispatch(getListData());
  //   // dispatch(getaData());
  //   if (location.search || products?.length === 0) {
  //     const sortBy = searchParams.get("sortBy");
  //     const queryParams = {
  //       params: {
  //         category: searchParams.getAll("category"),
  //         gender: searchParams.getAll("gender"),
  //         colortype: searchParams.getAll("colortype"),
  //         sizes: searchParams.getAll("sizes"),
  //         _sort: sortBy && "rating",
  //         _order: sortBy,
  //       },
  //     };
  //     dispatch(getData(queryParams));
  //   }
  // }, [dispatch, location.search, products?.length, searchParams]);
  const products = useSelector((store) => store?.product?.products);
  const category = useSelector((store) => store?.category?.category);
  useEffect(() => {
    if(products?.length === 0){
      dispatch(getCategory());
      dispatch(getProducts());
    }

  }, [dispatch, category?.length]);






  


  // handlerOpenFilter
  const handlerOpenFilter = () => {
    setOpenFilterData(!openFilterData);
  };
  // console.log(products);
  // End handlerOpenFilter
  // const postPerPage = 9;
  // const totalPosts = products?.length;
  // const indexOfLastPost = currentPage * postPerPage;
  // const indexOfFirstPost = indexOfLastPost - postPerPage;
  // const filterPosts = products?.slice(indexOfFirstPost, indexOfLastPost);
  // useEffect(() => {
  //   console.log(listProducts)
  //   products?.map((product) => {
  //     console.log(product.id)
  //   })
  // }, [])
  const listProduct = useSelector(
    (store) => store?.ListProductReducer?.listProduct
  );
  console.log(listProduct);
  return (
    <Box>
      <Navbar /> <br />
      <Itop />
      <Box w="80%" m="auto">
        <Box>
          <Text
            w={"100%"}
            color={"blue"}
            borderTop={"1px solid #337ab7"}
            paddingTop={"10px"}
          ></Text>
          <Text
            fontSize={["13px", "13px", "13px", "17px"]}
            fontWeight={"bold"}
            textAlign={"left"}
          >
            Gõ từ khóa tìm kiếm vào khung trên nhé!
          </Text>
          <Text
            w={"100%"}
            marginTop={"20px"}
            color={"blue"}
            borderTop={"1px solid #eee"}
            marginBottom={"20px"}
          ></Text>
        </Box>
        <Carousel />
        <Trending />
      </Box>
      {loading ? (
        <Loading />
      ) : (
        // <>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={20}
          padding={"5px"}
          flexDirection={isLargerThan ? "row" : "column"}
        >
          {/* <  FilterData listProduct={listProduct} /> */}
          {/* <FilterChecked /> */}
          <ListProducts products={products} category={category} />
        </Flex>
        /* {totalPosts > postPerPage && (
          <Paginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPosts={totalPosts}
            postPerPage={postPerPage}
          />
        )}
      </> */
      )}
    </Box>
  );
};

export default AllProducts;

// not applied pagination because it takes too much time to load

// const [currentPage, setCurrentPage] = useState(1);
// const postPerPage = 9;
// const totalPosts = products.length;
// const indexOfLastPost = currentPage * postPerPage;
// const indexOfFirstPost = indexOfLastPost - postPerPage;
// const filterPosts = products.slice(indexOfFirstPost, indexOfLastPost);
// {totalPosts > postPerPage && (
//   <Paginate
//     currentPage={currentPage}
//     setCurrentPage={setCurrentPage}
//     totalPosts={totalPosts}
//     postPerPage={postPerPage}
//   />
// )}
