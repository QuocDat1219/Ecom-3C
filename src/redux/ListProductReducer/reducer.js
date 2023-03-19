import * as data from "./actionType";

const init = {
    listProduct: [],
    isLoading: false,
    isError: false,
};

const ListProductReducer = (state = init, action) => {
    const { type, payload } = action;
    switch (type) {
        case data.GET_LIST_R: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case data.GET_LIST_S: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                listProduct: payload,
            };
        }
        case data.GET_LIST_F: {
            return {
                ...state,
                isError: true,
            };
        }
        default: {
            return state;
        }
    }
};
export { ListProductReducer };