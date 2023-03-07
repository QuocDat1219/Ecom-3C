import * as data from "./actionType";

const init = {
    listProduct: [{
        "id": "dm1",
        "name": "HÀNG MỚI VỀ - SẢN PHÂM THEO MÙA - CẬP NHẬT MỖI NGÀY- KÍCH XEM ĐẦY ĐỦ"
    },
    {
        "id": "dm2",
        "name": "ĐỒ CHƠI CÔNG NGHỆ - THIẾT BỊ SỐ-PHỤ KIỆN THÔNG MINH"
    },
    {
        "id": "dm3",
        "name": "ĐỒ DÙNG HỌC SINH- MÁY TÍNH- VIẾT CÁC PK LIÊN QUAN"
    }],
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