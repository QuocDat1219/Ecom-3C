import axios from "axios";

const getCategory = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_API}/category/`);
    console.log(response.data.category)
    return response.data.category;
};


const categoryService = {
    getCategory
};

export default categoryService;
