import {
    Box,
    Stack,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@chakra-ui/react';

import DesktopSubNav from './DesktopSubNav';

const DesktopNav = (props) => {

    return (
        <Stack direction={'row'} >
            {props.data.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>

                            <Link
                                p={2}

                                fontWeight={"blod"}
                                display={"block"}
                                fontSize={"20px"}
                                padding={"20px 20px"}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: '#ff0',
                                    color: "#1d3c84"
                                }}

                                href={navItem.href ?? '#'}
                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                textAlign={"left"}
                                border={0}
                                boxShadow={'xl'}
                                bg={"#1d3c84"}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}

                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

export default DesktopNav