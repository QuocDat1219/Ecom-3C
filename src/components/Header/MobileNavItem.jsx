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


const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (

        <Stack spacing={4} color={"white"}  onClick={children && onToggle}>

            <Flex
                p={2}
                as={Link}
                bg={"#1d3c84"}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                color={"white"}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    bg={"#1d3c84"}
                    fontWeight={300}
                    color={useColorModeValue('white', 'white')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                        color={'white'}
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
                    color={'white'}
                >

                    {children &&
                        children.map((child) => (
                            <Link key={child.label} color={"white"} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

export default MobileNavItem