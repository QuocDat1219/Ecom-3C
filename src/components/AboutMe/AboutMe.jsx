import { Box, Flex, Text } from "@chakra-ui/react";
import Navbar from "../Header/Navbar";
import Itop from "../iconTop/itop";
import Loading from "../Loading/Loading";
const AboutMe = () => {
    return (
     <div>
            <Navbar /> <br />
           <Box w="80%" m="auto" >
            <Itop />
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                textAlign="left"
                gap={20}
                padding={"5px"}
            >
                <Text
                fontSize={"16px"}>
                    Mục tiêu
                    <br />
                    Phân phối khắp 64 tỉnh, chúng tôi mang đến giá trị và cơ hội kinh doanh bằng cách kết nối các nhà cung cấp CNTT hàng đầu thế giới với một kênh phân phối gồm các đại lý công nghệ, nhà tích hợp hệ thống và nhà cung cấp dịch vụ.bán hàng va sau bán hàng
                    <br />
                    Chúng tôi kết hợp hiểu biết sâu sắc về ngành, chuyên môn kỹ thuật và nhiều thập kỷ kinh nghiệm phân phối để mang lại giá trị và tăng tốc cho các nhà cung cấp của chúng tôi và hỗ trợ các đối tác thành công trong kinh doanh.
                    <br />
                    <br />
                    Đội ngũ của chúng tôi
                    <br />
                    Thành công của chúng tôi được tạo nên từ nhiệt huyết và chuyên môn đội ngũ nhân sự của chúng tôi.
                     <br />
                    Những ý tưởng và nhiệt huyết của họ với công ty, nhà cung cấp và đối tác của chúng tôi thúc đẩy sứ mệnh hàng ngày của họ để mang lại hiệu suất kênh phân phối vượt trội.
                </Text>
            </Flex>
        </Box>
     </div>
    )
};
export default AboutMe;