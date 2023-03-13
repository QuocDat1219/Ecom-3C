import { Box, Flex, Text } from "@chakra-ui/react";
import Navbar from "../Header/Navbar";
import Itop from "../iconTop/itop";
import Loading from "../Loading/Loading";
import { WarrantyP_size, WarrantyP_font } from "../../style.golbal";
const WarrantyPolicy = () => {
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
          <Text fontSize={WarrantyP_size} fontFamily={WarrantyP_font}>
            1. Tất cả những sản phẩm bảo hành điều phải còn nguyên vẹn và phải
            là lỗi do nhà sản xuất.
            <br />
            2. Sản phẩm bảo hành thông thường là đổi mới nên sẽ không bảo hành
            cho sản phẩm nào quá cũ
            <br />
            3. Sản phẩm bảo hành nào khi kiểm tra không bị hư sẽ được gửi trả
            lại
            <br />
            4. Chỉ bảo hành sản phẩm, không bảo hành vỏ hộp và các phụ kiện kèm
            theo
            <br />
            5. Chỉ nhận bảo hành. Không bao đổi sang sản phẩm khác hoặc trừ tiền
            <br />
            6. Tất cả sản phẩm do MT cung cấp điều có in hoặc dán tem ghi rõ
            thời gian bảo hành
            <br />
            7. Khách hàng vui lòng xem kỹ thông tin và hình ảnh sản phẩm trước
            khi đặt hàng.
            <br />
            <Text color={"red"}>
              Chúng tôi sẽ nhận Bảo hành khi có tem BH của Shop mytindigital
              <br />
              Giờ Nhận , Trả - bảo hành từ 13h 30 đên 18h 30 từ T2, đên T7
              <br />
              Note : tùy thuộc vao từng loại sản phẩm mà hình thức bảo hành đổi
              tra khác nhau- quý khách liên hệ trực tiếp khi có thắc mắc
            </Text>
          </Text>
        </Flex>
      </Box>
    </div>
  );
};
export default WarrantyPolicy;
