import * as types from "./actionType";
import axios from "axios";
const getListData = (params) => (dispatch) => {
    dispatch({ type: types.GET_LIST_R });
    return axios
        .get(`${process.env.REACT_APP_BASE_API}/category`, params)
        .then((res) => {
            console.log(res.data.category);
            dispatch({ type: types.GET_LIST_S, payload: res.data.category });
        })
        .then((err) => {
            dispatch({ type: types.GET_LIST_F });
        });
}
export { getListData };
