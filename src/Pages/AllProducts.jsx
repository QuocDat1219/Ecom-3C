import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterData from "../Filter/Filters/FilterData";
import { getData } from "../redux/DataReducer/action";
import { Flex, Box, Spacer, Grid, Center, Text, Button } from "@chakra-ui/react";
import ProductDis from "../components/ProductsDisplay/ProductDis";
import { useMediaQuery } from "@chakra-ui/react";
import Loading from "../components/Loading/Loading";
import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ListProducts from "./ListProducts";
// import Paginate from "../components/Paginatation/Paginate";
//import FilterChecked from "../Filter/Filters/FilterChecked";
const AllProducts = () => {
  const dispatch = useDispatch();
  const listProduct = useSelector((store) => store?.ListProductReducer?.listProduct);
  const products = useSelector((store) => store?.dataReducer?.products);
  const loading = useSelector((store) => store?.dataReducer?.isLoading);
  const [searchParams] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(1);
  const [openFilterData, setOpenFilterData] = useState(false)
  const location = useLocation();
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (location.search || products?.length === 0) {
      const sortBy = searchParams.get("sortBy");

      const queryParams = {
        params: {
          category: searchParams.getAll("category"),
          gender: searchParams.getAll("gender"),
          colortype: searchParams.getAll("colortype"),
          sizes: searchParams.getAll("sizes"),
          _sort: sortBy && "rating",
          _order: sortBy,
        },
      };

      dispatch(getData(queryParams));
    }
  }, [dispatch, location.search, products?.length, searchParams]);

  // handlerOpenFilter
  const handlerOpenFilter = () => {
    setOpenFilterData(!openFilterData);
  }

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

  return (
    <Box  >
      <Navbar /> <br />
      {loading ? (
        <Loading />
      ) : (
        // <>
        <Flex justifyContent={"center"} alignItems={"center"} gap={20} padding={"5px"} flexDirection={isLargerThan ? "row" : "column"}  >

          {/* <  FilterData listProduct={listProduct} /> */}
          {/* <FilterChecked /> */}
          <ListProducts products={products} />
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
      )
      }
    </Box >
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
