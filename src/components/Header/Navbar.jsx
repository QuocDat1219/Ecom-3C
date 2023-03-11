import {
  Box,
  Text,
  Flex,
  IconButton,
  Collapse,
  Link,
  useColorModeValue,
  useDisclosure,
  Button,
  Input,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
} from '@chakra-ui/icons';
import tuananh from '../../image/tuananh.gif';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box>
        <Flex alignItems="center" h={"100px"} justifyContent="space-between">
          <Flex alignItems="center" ml={200}>
            <Image src={tuananh} alt="Logo" w="240px" h="75px" mr="4" />
            <Input placeholder="Tìm kiếm sản phẩm" border={"1px"} borderColor={"red"} rounded={"none"} fontSize={"24px"} ml={150} pr={150} />
            <Button rounded={"none"} bg={"red"} color={"white"} fontWeight={"bold"} fontSize={30} w={120}><SearchIcon></SearchIcon></Button>
          </Flex>
          <Flex textAlign={"left"} flexDirection="column" mr={200}>
            <Text fontSize={24} color={"red"} fontWeight={'bold'}>HOTLINE</Text>
            <Text fontSize="xl" fontWeight="bold">0123456789</Text>
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Flex
          bg={useColorModeValue('#1d3c84', '#1d3c84')}
          color={useColorModeValue('White', 'White')}
          borderBottom={1}
          borderStyle={'solid'}
          w={"100%"}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: 1 }}
            display={{ base: 'flex', md: 'none' }}
          >

            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>

            <Flex display={{ base: 'none', md: 'flex' }} m={"auto"}>
              <Link
                p={2}

                fontWeight={"blod"}
                display={"block"}
                fontSize={"20px"}
                padding={"20px 20px"}
                bg={'#ff0'}
                color={"#1d3c84"}
                _hover={{
                  textDecoration: 'none',
                  fontWeight: 100,
                }}
                href={"allproducts"}
              >
                Trang chủ
              </Link>
              <DesktopNav data={NAV_ITEMS} />
            </Flex>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav data={NAV_ITEMS} />
        </Collapse>
      </Box>
    </>
  );
}
export default Navbar;


const NAV_ITEMS = [
  {
    label: 'DANH MỤC SẢN PHẨM',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'HƯỚNG DẪN MUA HÀNG',
    href: '#',
  },
  {
    label: 'QUY ĐỊNH BẢO HÀNH CHUNG',
    href: '#',
  },
  {
    label: 'THÔNG TIN THANH TOÁN',
    href: '#',
  },
  {
    label: 'VỀ CHÚNG TÔI',
    href: '#',
  },
];