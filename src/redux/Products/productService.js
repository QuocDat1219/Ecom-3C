import axios from "axios";

const getProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_API}/products/`);
    console.log(response.data.products)
    return response.data.products;
};
const getAProducts = async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_API}products/${id}`);
    return response.data.products;

};

const productService = {
    getProducts, getAProducts
};

export default productService;
