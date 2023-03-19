import {
    Flex,
    Text,
    Stack,
    Collapse,
    Icon,
    Link,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    ChevronDownIcon,
} from '@chakra-ui/icons';
import { Navbar_bg_color, Navbar_text_default_color, Navbar_text_hover_color } from "../../style.golbal";

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (

        <Stack spacing={4} color={Navbar_text_default_color} onClick={children && onToggle}>

            <Flex
                p={2}
                as={Link}
                bg={Navbar_bg_color}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                color={Navbar_text_default_color}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    bg={Navbar_bg_color}
                    fontWeight={300}
                    color={useColorModeValue(Navbar_text_default_color, Navbar_text_default_color)}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                        color={Navbar_text_default_color}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    pl={5}
                    borderLeft={4}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    textAlign={"left"}
                    color={Navbar_text_default_color}
                    css={{
                        "&::-webkit-scrollbar": {
                            width: "20px",
                        },
                        "&::-webkit-scrollbar-track": {
                            width: "6px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            background: Navbar_text_default_color,
                            borderRadius: "13px",
                        },
                    }}
                    overflowX="auto"
                    maxHeight="300px"
                >

                    {children &&
                        children.map((child) => (
                            <Link key={child.name} color={Navbar_text_default_color} py={2} href={"/category/" + child._id}>
                                {child.name}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

export default MobileNavItem