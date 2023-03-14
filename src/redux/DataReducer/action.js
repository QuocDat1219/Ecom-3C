import * as types from "./actionType";
import axios from "axios";



const getData = (params) => (dispatch) => {
  dispatch({ type: types.GET_DATA_R });
  return axios
    .get(`${process.env.REACT_APP_BASE_API}/products`, params)
    .then((res) => {
      console.log(res.data.products)
      dispatch({ type: types.GET_DATA_S, payload: res.data.products });
    })
    .then((err) => {
      dispatch({ type: types.GET_DATA_F });
    });
};

// const getaData = (paramsid) => (dispatch) => {
//   dispatch({ type: types.GET_A_DATA_R });
//   return axios
//     .get(`${process.env.REACT_APP_BASE_API}/products/${id}`)
//     .then((res) => {
//       console.log('products', res);
//       dispatch({ type: types.GET_A_DATA_S, payload: res.data.products});
//     })
//     .catch((err) => {
//       dispatch({ type: types.GET_A_DATA_F });
//     });
// };



const updateData = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_DATA_R });
  return axios
    .patch(`${process.env.REACT_APP_BASE_API}/products/${id}`, payload)
    .then((res) => {
      dispatch({ type: types.UPDATE_DATA_S });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_DATA_F });
    });
};


const deleteData = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_DATA_R });
  return axios
    .delete(`${process.env.REACT_APP_BASE_API}/products/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_DATA_S });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_DATA_F });
    });
};


export { getData, updateData, deleteData };

