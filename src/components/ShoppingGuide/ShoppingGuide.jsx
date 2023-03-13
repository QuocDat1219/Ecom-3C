import { Box, Flex, Text } from "@chakra-ui/react";
import Navbar from "../Header/Navbar";
import Itop from "../iconTop/itop";
import Loading from "../Loading/Loading";
import {
  ShoppingGuide_colorR,
  ShoppingGuide_colorB,
  ShoppingGuide_size,
  ShoppingGuide_font,
} from "../../style.golbal";
const ShoppingGuide = () => {
  return (
    <div>
      <Navbar /> <br />
      <Box w="80%" m="auto">
        <Itop />
        <Flex
          justifyContent={"left"}
          alignItems={"center"}
          textAlign="left"
          gap={20}
          padding={"5px"}
        >
          <Text fontSize={ShoppingGuide_size} fontFamily={ShoppingGuide_font}>
            <Text
              justifyContent={"center"}
              alignItems={"center"}
              textAlign="center"
            >
              <Text fontSize={"26pt"}>
                I/ CÁCH MUA HÀNG LẺ VÀ ĐƯỢC GIAO TẬN NHÀ NỘI THÀNH HỒ CHÍ MINH
              </Text>
              <Text color={ShoppingGuide_colorR} fontStyle={"italic"}>
                <Text>
                  CÁCH THỨC MUA HÀNG TRONG NỘI THÀNH HCM SỐ LƯỢNG DƯỚI 2TR KHÁCH
                  VUI LÒNG
                </Text>
                <Text color={ShoppingGuide_colorB}>BƯỚC-1</Text>
                <Text>
                  GỬI ĐƠN HÀNG ZALO :0903884900-0934456252-0933770888 <br /> (
                  lưu ghi rỏ mã hàng , tên sản phẩm , số lượng cần mua)
                </Text>
                <Text color={ShoppingGuide_colorB}>BƯỚC-2</Text>
                <Text>
                  BÊN SHOP BÁO LẠI CHI TIẾT SẢN PHẨM CÒN , GIÁ TỪNG LOẠI THEO
                  PHIẾU XUẤT
                </Text>
                <Text color={ShoppingGuide_colorB}>BƯỚC-3</Text>
                <Text>
                  QUÝ KHÁCH CHUYỂN KHOẢN THEO CÁC TK BÊN DƯỚI - SAU KHI NHẬN
                  ĐƯỢC TIỀN ĐỦ
                </Text>
                <Text color={ShoppingGuide_colorB}>BƯỚC-4</Text>
                <Text>
                  BÊN MÌNH SẼ GỬI GRAB/GIAO TẬN NƠI TRONG NGÀY- PHÍ GH KHÁCH
                  THANH TOÁN CHO DỊCH VỤ GIAO HÀNG
                  <br />
                  <br />
                  CƯỚC PHÍ PHỤ THUỘC VÀO VỊ TRÍ CỦA KHÁCH XA HAY GẦN SO VỚI ĐỊA
                  CHỈ SHOP
                  <br />
                  <br />
                  *****************
                  <br />
                  VUI LÒNG GHI RỎ THÔNG TIN NGƯỜI NHẬN HÀNG SAU KHI CHUYỂN KHOẢN
                  <br />
                  *****************
                </Text>
              </Text>
            </Text>
            <Text>
              CÁC CÂU HỎ THƯỜNG GẶP KHI MUA HÀNG <br />
              1. Địa chỉ shop ở đâu, tôi có thể đến mua hàng trực tiếp được
              không?
              <br /> Xin Đáp
            </Text>
            <Text color={ShoppingGuide_colorB}>
              Thế mạnh của mytindigital.com là bán hàng online, hàng sẽ được
              giao tận nơi cho quý khách trên phạm vi nội thành Hồ Chí Minh ,
              nên quý khách an tâm Khi mua Hàng tại www.mytindigital.com Điều
              kiện Hóa đơn xuất kho có giá trị từ 2.000.000 ( 2 Triệu) Trở lên (
              Nếu thấp hơn có thể gọi 0933 456 252 để thỏa thuận cước phí giao
              hàng , thường từ 15k đên 20k tùy địa điểm) <br /> Cửa hàng chính:
              211/31 Minh phụng f9 quận 6 <br />
              Lưu ý : Chúng tôi không có chi nhánh khác)
            </Text>
            <Text>
              .Tôi thấy web có nhiều sản phẩm hay muốn mua nhưng không biết làm
              thế nào để đặt hàng? <br /> Đáp
            </Text>
            <Text color={ShoppingGuide_colorB}>
              Quý khách có thể đặt hàng qua 3 cách sau: <br /> - Qua điện thoại:
              Quý khách có thể sms danh sách các sản phẩm cần mua vào số đt zalo
              0934 456 252 , hoặc đọc cho nhân viên của shop ghi lại. <br /> -
              Qua email: Quý khách có thể gửi mail đặt hàng với các thông tin:
              họ tên, địa chỉ, số điện thoại liên hệ, các sản phẩm cần mua vào
              email - mytinmobile@gmail.com <br /> Xin quý khách vui lòng chờ
              nếu nhân viên của shop chưa kịp trả lời mail, tin nhắn của quý
              khách ngay được. Khách hàng có thể đến trực tiếp địa chỉ 837 Hồng
              Bàng, shop Mytindigital.com để mua hàng Hoặc đặt hàng trước- rồi
              nhờ người Thân đến nhân hàng và trả tiền tại shop( đv khách giao
              dich ở xa và lần đầu)
            </Text>
            <Text>
              3. Thanh toán thế nào? Thanh toán trước giao hàng sau? Có gì đảm
              bảo sau khi thanh toán sẽ nhận được hàng?
            </Text>
            <Text fontWeight={"bold"}>
              <Text color={ShoppingGuide_colorB}>
                Nếu ở các quận nội thành HCM,
              </Text>{" "}
              Quý khách có thể đên Địa chỉ 837 Hồng Bàng Phường 9/quận 6 THCM để
              xem hàng mà mua hàng được dễ dàng hơn
            </Text>
            <Text fontWeight={"bold"} color={ShoppingGuide_colorB}>
              Các tỉnh thành khác- QUÝ KHÁCH THANH TOÁN THEO PHƯƠNG THỨC- CHUYỂN
              KHOẢN TRƯỚC NHẬN HÀNG SAU- THỜI GIAN NHẬN HÀNG TỪ 12H ĐẾN 48 GIỜ
              TÙY TỪNG ĐỊA PHƯƠNG-
            </Text>
            <Text>
              Phí ship hàng quý khách sẽ tự thanh toán cho bên dịch vụ khi nhận
              được hàng -
            </Text>
            <Box border={"1px solid black"}>
              <Text>
                <Text color={ShoppingGuide_colorR} fontWeight={"bold"}>
                  Gặp bất cứ vẫn đề gì trong việc mua hàng & chuyển khoản vui
                  lòng gọi ngay
                </Text>
                <Text
                  color={ShoppingGuide_colorB}
                  fontSize={"24px"}
                  fontWeight={"bold"}
                >
                  0933 456 252 Mr Trường - Giờ phục vụ 9h đên 19h các ngày
                </Text>
                <Text color={ShoppingGuide_colorB}>
                  Hàng sau khi ship, quý khách có thể theo dõi hành trình đường
                  đi dễ dàng trên internet (xem thêm hướng dẫn Tra cứu trạng
                  thái, hành trình hàng mua), <br /> đối với quý khách ở các
                  miền Tây, Tp HCM, và các tỉnh lân cận như Bình Dương, Đồng
                  Nai, Vũng Tàu.... thời gian thường từ 1-4 ngày. Các tỉnh khu
                  vực miền Trung, miền Bắc thời gian thường từ 2-7 ngày. Do phụ
                  thuộc hoàn toàn vào dịch vụ bưu chính, shop không chủ động
                  được thời gian giao hàng chính xác, mong quý khách thông cảm.{" "}
                  <br /> Nếu có yêu cầu sử dụng dịch vụ chuyển phát nhanh trong
                  24, 48h, shop sẽ tính theo bảng giá chuyển phát nhanh của đơn
                  vị chuyển phát.
                </Text>
              </Text>
            </Box>
            <Box border={"1px solid black"}>
              <Text>
                <Text color={ShoppingGuide_colorR}>
                  6. QUY ĐINH BẢO HÀNH <br /> 6-1- Thẻ Nhớ - BH 12 tháng -ĐK- (
                  Có tem, còn thời gian bảo hành- logo sản phẩm rỏ ràng, không
                  nứt .gảỷ , biến dạng, trầy xướt do dùng vật cứng can thiệp){" "}
                  <br /> 6-2 - Loa nghe thẻ - BH 03 T ( còn tem , sản phẩm còn
                  nguyên vẹn, chưa có dấu hiệu can thiệp từ bên ngoài.- Chỉ bao
                  loa chứ năng nghe nhạc, FM, Màn Hình, Jack Tai nghe, Phụ kiện,
                  Pin đi kèm chỉ bao test tại chổ hoặc 3 ngày sau khi mua hàng){" "}
                  <br /> 6-3 - Bluetoothe : BH 06 Tháng ( ĐK còn tem còn thời
                  gian BH- Không vô nước, tháo gỡ, Chỉ BH bluetooth- PK đi kèm
                  bao test 1 tuần sau khi mua) <br /> 8 Tôi là khách lẻ , muốn
                  mua 1 sản phẩm để sử dụng shop có phục vụ không?
                </Text>
                <Text fontWeight={"bold"}>Đáp</Text>
                <Text>
                  Chúng tôi sẽ phục vụ cho bạn mua 1 món với giá trên bảng giá
                  với các điều kiện sau Đến shop bạn chỉ cần đọc mã sản phẩm và
                  số lượng cần mua những mặt hành chúng tôi đang có, NVGH sẽ
                  xuất hàng cho bạn ngay sau khi được thanh toán Bạn xem kỷ giá
                  & và thông tin mặt hàng , bảo hành, cách sử dụng, địa chỉ...
                  Trước khi đến Do là kho hàng bán sỉ nên chúng tôi không có bộ
                  nhận chăm sóc khách hàng như các siệu thị bán lẻ hiện nay, nên
                  việc bạn không được tư vấn tốt tại shop là điều có thể xảy ra,
                  Mong quý khách lưu ý trước khi đưa ra thắc mắt này
                </Text>
              </Text>
            </Box>
          </Text>
        </Flex>
      </Box>
    </div>
  );
};
export default ShoppingGuide;
