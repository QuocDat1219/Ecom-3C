import * as types from "./actionType";
import axios from "axios";
const getListData = (params) => (dispatch) => {
    dispatch({ type: types.GET_LIST_R });
    return axios
        .get(`${process.env.REACT_APP_BASE_API}/productList`, params)
        .then((res) => {
            dispatch({ type: types.GET_LIST_S, payload: res.data });
        })
        .then((err) => {
            dispatch({ type: types.GET_LIST_F });
        });
}
export { getListData };
