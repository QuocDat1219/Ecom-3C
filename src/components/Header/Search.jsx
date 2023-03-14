import {
    Flex,
    Button,
    Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Header_search_color } from "../../style.golbal";
const Search = () => {
    return (
        <Flex w={["80%", "100%", "100%", "100%"]}>
            <Input
                placeholder="Tìm kiếm sản phẩm"
                borderColor={Header_search_color}
                border={"2px"}
                rounded={"none"}
                h={"34px"}
            />
            <Button
                rounded={"none"}
                bg={Header_search_color}
                color={"white"}
                fontWeight={"bold"}
                h={"34px"}
                fontSize={"22px"}
            >
                <SearchIcon></SearchIcon>
            </Button>
        </Flex>

    )

}

export default Search