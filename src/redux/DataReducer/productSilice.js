import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import productService, { getaData } from "./action";

export const getABlog = createAsyncThunk(
    "products/get-products",
    async (id, thunkAPI) => {
        try {
            return await getaData(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);