import {
  Box,
  Flex,
  HStack,
  VStack,
  Image,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon} from '@chakra-ui/icons';
import phishcode_logoo_1 from '../assets/logo/phishcode_logoo_1.png'
import icon_feedback_01_1 from '../assets/icons/icon_feedback_01_1.png'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const drawerItems = [
    {
      title: 'Explore',
      links: ['How to get Copilot', 'Features', 'Try free version of Copilot', 'For business'],
    },
    {
      title: 'Products',
      links: ['Copilot Labs', 'Copilot in Edge', 'Copilot in Windows', 'Copilot Pro'],
    },
    {
      title: 'Pricing',
      links: [],
    },
    {
      title: 'Resources',
      links: [
        'Privacy & Security',
        'Do more with Copilot',
        'AI art prompting guide',
        'Copilot blog',
        'AI blog',
        'AI',
        'Learn',
        'Build',
      ],
    },
    {
      title: 'Partners',
      links: [
        'Find a partner',
        'Become a partner',
        'Partner resources',
        'AppSource',
      ],
    },
    {
      title: 'Support',
      links: [
        'Product documentation',
        'Technical support',
        'On=premises product support',
      ],
    },

  ];

  return (
    <Box px={0} py={1} position="sticky" zIndex={1000} pt="2px" bg="white">
      <Flex direction="column" gap="18px">
        {isDesktop ? (
          // ✅ Desktop Navbar
          <Box px="73px">
            <Flex h={12} alignItems="center" justifyContent="space-between">
              <HStack spacing={5} align="center">
                <Image src={phishcode_logoo_1} h="29px" w="120px" cursor="pointer" mt={2} />
              </HStack>

              <HStack spacing="14px" align="center">
                <Text cursor="pointer" fontSize="13px" mt={1}>
                  <Image src={icon_feedback_01_1} h='20px' w='28px'/>
                </Text>

                <Button
                  bg="#0E1726"
                  color="white"
                  aria-label="Try for Free"
                  size="sm"
                  fontSize={{ base: "sm", md: "13px" }}
                  borderRadius="3px"
                  fontWeight="normal"
                  w='80px'
                  h='31px'
                  mt={1}
                  _hover={{ bg: 'gray.800' }} 
                >
                  Get a demo
                </Button>

                <Button
                  variant="outline"
                  borderColor="black"
                  color="black"
                  aria-label="Sign In"
                  size="sm"
                  w='58px'
                  h='31px'
                  fontSize={{ base: "sm", md: "13px" }}
                  fontWeight="normal"
                  borderRadius="3px"
                  mt={1}
                  _hover={{ bg: 'blue.50' }} 
                >
                  Sign in
                </Button>
              </HStack>
            </Flex>
          </Box>
        ) : (
          // ✅ Mobile Layout
          <>
            {/* Row 1 */}
            <Box borderBottom="1px solid" borderColor="gray.200" w="100%" py={6}>
              <Flex justify="space-between" align="center" position="relative" px={4}>
                    <Box position="absolute" left="50%" transform="translateX(-50%)">
                      <Image src={phishcode_logoo_1} h="24px" w="107px" cursor="pointer" />
                    </Box>
              </Flex>
            </Box> 
          </>
        )}
      </Flex>

      {/* Drawer for mobile (hamburger) */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bgColor="white">
            <Image src={phishcode_logoo_1} h="6" />
          </DrawerHeader>
          <DrawerBody p={0} bgColor="white">
            <VStack align="stretch" spacing={0}>
              <Box px={4} py={3} borderBottom="1px dotted gray">
                <Text fontWeight="medium">Microsoft 365</Text>
              </Box>
              {[
                'Teams',
                'Copilot',
                'Windows',
                'Surface',
                'Xbox',
                'Deals',
                'Small Business',
                'Support',
              ].map((item, index) => (
                <Box
                  key={index}
                  px={4}
                  py={3}
                  _hover={{ bg: 'gray.400' }}
                  borderBottom="1px solid"
                  borderColor="gray.100"
                >
                  <Text fontWeight="normal">{item}</Text>
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;

