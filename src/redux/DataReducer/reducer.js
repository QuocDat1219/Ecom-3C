import * as data from "./actionType";

const init = {
  // products: [
  //   {
  //     "name": "BÌNH HOA CHƯNG TẾT THẠCH BÍCH 25CM",
  //     "id": "000019",
  //     "images": "https://mytindigital.com/uploads/tmp/product1669259634.jpg",
  //     "price": "130,000 đ",
  //     "idProductList": "dm1"
  //   },
  //   {
  //     "name": "DÂY TREO THẦN TÀI LẮC 40CM SIÊU ĐẸP MẪU MỚI 2023",
  //     "id": "000024",
  //     "images": "https://mytindigital.com/uploads/tmp/product1671162093.jpg",
  //     "price": "130,000 đ",
  //     "idProductList": "dm1"
  //   },
  //   {
  //     "name": "Hộp bánh quy bơ mèo thần tài 168gr",
  //     "id": "000112",
  //     "images": "https://mytindigital.com/uploads/tmp/product1671421234.jpg",
  //     "price": "130,000 đ",
  //     "idProductList": "dm1"
  //   },
  //   {
  //     "name": "HỘP SOCOLA TIM CHỮ I LOVE U (MẪU 3D)",
  //     "id": "000125",
  //     "images": "https://mytindigital.com/uploads/tmp/product1675434375.jpg",
  //     "idProductList": "dm1"
  //   },
  //   {
  //     "name": "LỒNG ĐÈN 60CM CHÚC MỪNG NĂM MỚI 2023",
  //     "id": "000196",
  //     "images": "https://mytindigital.com/uploads/tmp/product1672826385.jpg",
  //     "idProductList": "dm1"
  //   },
  //   {
  //     "name": "BỘ ĐỒ CHƠI LÔ TÔ GIẤY HẠT NHỰA",
  //     "id": "000234",
  //     "images": "https://mytindigital.com/uploads/tmp/product1672826385.jpg",
  //     "idProductList": "dm1"
  //   },
  //   {
  //     "name": "KHAY ĐỰNG MỨT BÁNH KẸO 5 CÁNH XOAY 360",
  //     "id": "000249",
  //     "images": "https://mytindigital.com/uploads/tmp/product1672826385.jpg",
  //     "idProductList": "dm1"
  //   },
  //   {
  //     "name": "KHAY MỨT 3 TẦNG TRONG SUỐT MÈO",
  //     "id": "000327",
  //     "images": "https://mytindigital.com/uploads/tmp/product1672826385.jpg",
  //     "idProductList": "dm1"
  //   },
  //   {
  //     "name": "MÈO THẦN TÀI - TÀI LỘC 10CM",
  //     "id": "000346",
  //     "images": "https://mytindigital.com/uploads/tmp/product1672826385.jpg",
  //     "idProductList": "dm1"
  //   },
  //   {
  //     "name": "CHAI TẨY TRẮNG GIÀY CÓ ĐẦU CHÙI PLAC",
  //     "id": "000404",
  //     "images": "https://mytindigital.com/uploads/tmp/product1672826385.jpg",
  //     "idProductList": "dm1"
  //   },
  //   {
  //     "id": "00001",
  //     "images": "https://mytindigital.com/uploads/tmp/product1670822219.jpg",
  //     "name": "CHAI XỊT VỆ SINH NHÀ TẮM NHÀ BẾP NHẬT BẢN 500ML",
  //     "price": "17,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00002",
  //     "images": "https://mytindigital.com/uploads/tmp/product1670480642.jpg",
  //     "name": "Chảo Gang Bát giác KOHEE Hàn Quốc 33cm siêu đẹp",
  //     "price": "145,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00003",
  //     "images": "https://mytindigital.com/uploads/tmp/product1675414831.jpg",
  //     "name": "NƯỚC TẨY VỆ SINH LỒNG MÁY GIẶT NHẬT BẢN 500ML",
  //     "price": "50,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00004",
  //     "images": "https://mytindigital.com/uploads/tmp/product1676278561.jpg",
  //     "name": "HỘP 200 TĂM BÔNG AN TOÀN TIỆN LỢI",
  //     "price": "17,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00005",
  //     "images": "https://mytindigital.com/uploads/tmp/product1667188202.jpg",
  //     "name": "GIỎ HOA TẶNG THẦY CÔ 20/11 SIÊU ĐẸP",
  //     "price": "115,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00006",
  //     "images": "https://mytindigital.com/uploads/tmp/product1662972180.jpg",
  //     "name": "KHÔ MỰC XÉ SỢI ĂN LIỀN (250GR)",
  //     "price": "50,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00007",
  //     "images": "https://mytindigital.com/uploads/tmp/product1676951681.jpg",
  //     "name": "NƯỚC XẢ VẢI THÁI FRESH & SOFT (600ML)",
  //     "price": "14,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00008",
  //     "images": "https://mytindigital.com/uploads/tmp/product1606804557.jpg",
  //     "name": "DẦU NÓNG XOA BÓP HÀN QUỐC",
  //     "price": "27,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00009",
  //     "images": "https://mytindigital.com/uploads/tmp/product1663231079.jpg",
  //     "name": "KHĂN GIẤY NÉN HÀN QUỐC HÌNH VIÊN KẸO ĐA NĂNG 1 GÓI 20 VIÊN",
  //     "price": "10,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00010",
  //     "images": "https://mytindigital.com/uploads/tmp/product1649472804.jpg",
  //     "name": "ÁO MƯA CÁNH DƠI VẢI HÀN QUỐC CAO CẤP",
  //     "price": "65,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "000011",
  //     "images": "https://mytindigital.com/uploads/tmp/product1666154080.jpg",
  //     "name": "HỘP HOA BI QUÀ TẶNG CÓLED SIÊU ĐẸP",
  //     "price": "130,000 đ",
  //     "guarantee": "TEST",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00012",
  //     "images": "https://mytindigital.com/uploads/tmp/product1662626227.jpg",
  //     "name": "NƯỚC GIẶT FINELINE 3.0 L NHẬP KHẨU THÁI",
  //     "price": "145,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00013",
  //     "images": "https://mytindigital.com/uploads/tmp/product1663307731.jpg",
  //     "name": "SET 5 TÚI LƯỚI GIẶT ĐỒ",
  //     "price": "105,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00014",
  //     "images": "https://mytindigital.com/uploads/tmp/product1662625162.jpg",
  //     "name": "HỘP 12 CHIẾC KẸO DẺO PIZZA HAPPY 16G THÁI LAN KÈM ĐỒ CHƠI",
  //     "price": "45,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00015",
  //     "images": "https://mytindigital.com/uploads/tmp/product1633271717.jpg",
  //     "name": "HỘP NHANG MUỖI THÁI LAN 30 CÂY",
  //     "price": "10,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00016",
  //     "images": "https://mytindigital.com/uploads/tmp/product1621927147.jpg",
  //     "name": "CHAI TẨY TOILET OKAY AIRLIFE PINK 960ML",
  //     "price": "20,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00017",
  //     "images": "https://mytindigital.com/uploads/tmp/product1662950816.jpg",
  //     "name": "KẸO DẺO XUYÊN THÁI LAN 300G ( 12 QUE )",
  //     "price": "45,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00018",
  //     "images": "https://mytindigital.com/uploads/tmp/product1662627665.jpg",
  //     "name": "THẠCH SỮA PUDDING MIKKU THÁI LAN 210G",
  //     "price": "18,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00019",
  //     "images": "https://mytindigital.com/uploads/tmp/product1662626593.jpg",
  //     "name": "CHAI XỊT CÔN TRÙNG THÁI LAN ARS 600ML",
  //     "price": "55,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00020",
  //     "images": "https://mytindigital.com/uploads/tmp/product1663898523.jpg",
  //     "name": "DẦU SÂM THẢO DƯỢC THÁI LAN",
  //     "price": "30,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00021",
  //     "images": "https://mytindigital.com/uploads/tmp/product1662625678.jpg",
  //     "name": "THẠCH TRÁI CÂY 3 MÀUDEEDO THÁI LAN TÚI 720G",
  //     "price": "35,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00022",
  //     "images": "https://mytindigital.com/uploads/tmp/product1598606783.jpg",
  //     "name": "NƯỚC SÚC MIỆNG LISTERINE 750ML (kèm 1 chai 250ml)",
  //     "price": "90,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00023",
  //     "images": "https://mytindigital.com/uploads/tmp/product1675408986.jpg",
  //     "name": "TÚI 39 VIÊN NƯỚC GIẶT 4IN1 NHẬT BẢN SIÊU THƠM",
  //     "price": "200,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00024",
  //     "images": "https://mytindigital.com/uploads/tmp/product1638517102.jpg",
  //     "name": "CHẢO SÂU VUNG KÍN CÓ NẮP 32CM BẾP TỪ HÀN QUỐC",
  //     "price": "130,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00025",
  //     "images": "https://mytindigital.com/uploads/tmp/product1581760903.jpg",
  //     "name": "BÀN CHẢI THAN TRE HÀN QUỐC BOSSI",
  //     "price": "3,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00026",
  //     "images": "https://mytindigital.com/uploads/tmp/product1661147980.jpg",
  //     "url": "https://mytindigital.com/san-pham/kem-danh-rang-median-han-quoc-120g",
  //     "name": "KEM ĐÁNH RĂNG MEDIAN HAN QUỐC 120G",
  //     "name_url": "https://mytindigital.com/san-pham/kem-danh-rang-median-han-quoc-120g",
  //     "price": "23,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00027",
  //     "images": "https://mytindigital.com/uploads/tmp/product1648868591.jpg",
  //     "name": "ÁO MƯA BÍT 1 NGƯƠI VẢI HÀN QUỐC 1.5M CAO CẤP",
  //     "price": "60,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00028",
  //     "images": "https://mytindigital.com/uploads/tmp/product1669884428.jpg",
  //     "name": "DIỆT CHUỘT THÁI - AN TOÀN - HIỆU QUẢ",
  //     "price": "23,000 đ",
  //     "guarantee": "TEST",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00029",
  //     "images": "https://mytindigital.com/uploads/tmp/product1672482386.jpg",
  //     "name": "KHĂN GIẤY LỤA PULPPY 2 LỚP 1 HỘP 100 TỜ",
  //     "price": "14,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00030",
  //     "images": "https://mytindigital.com/uploads/tmp/product1662631210.jpg",
  //     "name": "NƯỚC XẢ ĐẬM ĐẶC SIÊU THƠM THÁI LAN HYGIENE TÚI 1.2L (có vòi)",
  //     "price": "85,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00031",
  //     "images": "https://mytindigital.com/uploads/tmp/product1665639359.jpg",
  //     "name": "10 GÓI KHĂN ƯỚT VỊT VÀNG THÙNG GIẤY KUTE",
  //     "price": "40,000 đ",
  //     "guarantee": "TEST",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00032",
  //     "images": "https://mytindigital.com/uploads/tmp/product1650609231.jpg",
  //     "name": "SỮA TẮM GỘI EM BÉ 2IN1 D-NEE 400ML",
  //     "price": "50,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00033",
  //     "images": "https://mytindigital.com/uploads/tmp/product1581739921.jpg",
  //     "name": "NƯỚC XẢ VẢI COMFORT THÁI 580ml THƠM LÂU",
  //     "price": "12,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "id": "00034",
  //     "images": "https://mytindigital.com/uploads/tmp/product1664958823.jpg",
  //     "name": "RƯỢU MÈO PHONG THỦY 2023- ĐÓN TẾT QUÝ MÃO",
  //     "price": "850,000 đ",
  //     "idProductList": "dm2"
  //   },
  //   {
  //     "now": "now",
  //     "id": "00019",
  //     "images": "https://mytindigital.com/uploads/tmp/product1662626593.jpg",
  //     "name": "CHAI XỊT CÔN TRÙNG THÁI LAN ARS 600ML",
  //     "price": "55,000 đ",
  //     "idProductList": "dm3"
  //   },
  //   {
  //     "id": "00020",
  //     "images": "https://mytindigital.com/uploads/tmp/product1663898523.jpg",
  //     "name": "DẦU SÂM THẢO DƯỢC THÁI LAN",
  //     "price": "30,000 đ",
  //     "idProductList": "dm3"
  //   },
  //   {
  //     "id": "00021",
  //     "images": "https://mytindigital.com/uploads/tmp/product1662625678.jpg",
  //     "name": "THẠCH TRÁI CÂY 3 MÀUDEEDO THÁI LAN TÚI 720G",
  //     "price": "35,000 đ",
  //     "idProductList": "dm3"
  //   },
  //   {
  //     "id": "00022",
  //     "images": "https://mytindigital.com/uploads/tmp/product1598606783.jpg",
  //     "name": "NƯỚC SÚC MIỆNG LISTERINE 750ML (kèm 1 chai 250ml)",
  //     "price": "90,000 đ",
  //     "idProductList": "dm3"
  //   },
  //   {
  //     "id": "00023",
  //     "images": "https://mytindigital.com/uploads/tmp/product1675408986.jpg",
  //     "name": "TÚI 39 VIÊN NƯỚC GIẶT 4IN1 NHẬT BẢN SIÊU THƠM",
  //     "price": "200,000 đ",
  //     "idProductList": "dm3"
  //   },
  //   {
  //     "id": "00024",
  //     "images": "https://mytindigital.com/uploads/tmp/product1638517102.jpg",
  //     "name": "CHẢO SÂU VUNG KÍN CÓ NẮP 32CM BẾP TỪ HÀN QUỐC",
  //     "price": "130,000 đ",
  //     "idProductList": "dm3"
  //   },
  //   {
  //     "id": "00025",
  //     "images": "https://mytindigital.com/uploads/tmp/product1581760903.jpg",
  //     "name": "BÀN CHẢI THAN TRE HÀN QUỐC BOSSI",
  //     "price": "3,000 đ",
  //     "idProductList": "dm3"
  //   },
  //   {
  //     "id": "00026",
  //     "images": "https://mytindigital.com/uploads/tmp/product1661147980.jpg",
  //     "url": "https://mytindigital.com/san-pham/kem-danh-rang-median-han-quoc-120g",
  //     "name": "KEM ĐÁNH RĂNG MEDIAN HAN QUỐC 120G",
  //     "name_url": "https://mytindigital.com/san-pham/kem-danh-rang-median-han-quoc-120g",
  //     "price": "23,000 đ",
  //     "idProductList": "dm3"
  //   },
  //   {
  //     "id": "00027",
  //     "images": "https://mytindigital.com/uploads/tmp/product1648868591.jpg",
  //     "name": "ÁO MƯA BÍT 1 NGƯƠI VẢI HÀN QUỐC 1.5M CAO CẤP",
  //     "price": "60,000 đ",
  //     "idProductList": "dm3"
  //   },
  //   {
  //     "id": "00028",
  //     "images": "https://mytindigital.com/uploads/tmp/product1669884428.jpg",
  //     "name": "DIỆT CHUỘT THÁI - AN TOÀN - HIỆU QUẢ",
  //     "price": "23,000 đ",
  //     "guarantee": "TEST",
  //     "idProductList": "dm3"
  //   },
  //   {
  //     "id": "00029",
  //     "images": "https://mytindigital.com/uploads/tmp/product1672482386.jpg",
  //     "name": "KHĂN GIẤY LỤA PULPPY 2 LỚP 1 HỘP 100 TỜ",
  //     "price": "14,000 đ",
  //     "idProductList": "dm3"
  //   },
  //   {
  //     "id": "00030",
  //     "images": "https://mytindigital.com/uploads/tmp/product1662631210.jpg",
  //     "name": "NƯỚC XẢ ĐẬM ĐẶC SIÊU THƠM THÁI LAN HYGIENE TÚI 1.2L (có vòi)",
  //     "price": "85,000 đ",
  //     "idProductList": "dm3"
  //   },
  //   {
  //     "id": "00031",
  //     "images": "https://mytindigital.com/uploads/tmp/product1665639359.jpg",
  //     "name": "10 GÓI KHĂN ƯỚT VỊT VÀNG THÙNG GIẤY KUTE",
  //     "price": "40,000 đ",
  //     "guarantee": "TEST",
  //     "idProductList": "dm3"
  //   },
  //   {
  //     "id": "00032",
  //     "images": "https://mytindigital.com/uploads/tmp/product1650609231.jpg",
  //     "name": "SỮA TẮM GỘI EM BÉ 2IN1 D-NEE 400ML",
  //     "price": "50,000 đ",
  //     "idProductList": "dm3"
  //   },
  //   {
  //     "id": "00033",
  //     "images": "https://mytindigital.com/uploads/tmp/product1581739921.jpg",
  //     "name": "NƯỚC XẢ VẢI COMFORT THÁI 580ml THƠM LÂU",
  //     "price": "12,000 đ",
  //     "idProductList": "dm3"
  //   },
  //   {
  //     "id": "00034",
  //     "images": "https://mytindigital.com/uploads/tmp/product1664958823.jpg",
  //     "name": "RƯỢU MÈO PHONG THỦY 2023- ĐÓN TẾT QUÝ MÃO",
  //     "price": "850,000 đ",
  //     "idProductList": "dm3"
  //   }
  // ],
  products: [

  ],
  isLoading: false,
  isError: false,
};




const dataReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case data.GET_DATA_R: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case data.GET_DATA_S: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };
    }
    case data.GET_DATA_F: {
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
export { dataReducer };
