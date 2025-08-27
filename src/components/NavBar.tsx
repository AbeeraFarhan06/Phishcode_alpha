// This component renders the top navigation bar of the website.
// It includes the logo, navigation links, and buttons for signing in and getting a demo.
// It also includes a responsive design, with a drawer for mobile devices.

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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import phishcode_logoo_1 from "../assets/logo/phishcode_logoo_1.png";
import icon_feedback_01_1 from "../assets/icons/icon_feedback_01_1.png";
import pipeline from '../assets/icons/pipeline.png'
import Container from "./Container";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // useDisclosure is a Chakra UI hook that helps with managing the state of modals, drawers, and other overlay components.
  const { isOpen, onOpen, onClose } = useDisclosure();
  // useBreakpointValue is a Chakra UI hook that allows you to specify different values for different breakpoints.
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  // An array of objects that represent the items in the mobile drawer.
  const drawerItems = [
    {
      title: "Explore",
      links: [
        "How to get Copilot",
        "Features",
        "Try free version of Copilot",
        "For business",
      ],
    },
    {
      title: "Products",
      links: [
        "Copilot Labs",
        "Copilot in Edge",
        "Copilot in Windows",
        "Copilot Pro",
      ],
    },
    {
      title: "Pricing",
      links: [],
    },
    {
      title: "Resources",
      links: [
        "Privacy & Security",
        "Do more with Copilot",
        "AI art prompting guide",
        "Copilot blog",
        "AI blog",
        "AI",
        "Learn",
        "Build",
      ],
    },
    {
      title: "Partners",
      links: [
        "Find a partner",
        "Become a partner",
        "Partner resources",
        "AppSource",
      ],
    },
    {
      title: "Support",
      links: [
        "Product documentation",
        "Technical support",
        "On=premises product support",
      ],
    },
  ];

  return (
    <Box position="sticky" zIndex={1000} bg="white">
      <Container navbar1>
        <Flex direction="column">
          {isDesktop ? (
            // Render the desktop version of the navbar if the screen is large enough.
            <Flex h={2} alignItems="center" justifyContent="space-between">
              <HStack spacing={5} align="center">
                <Image
                  src={phishcode_logoo_1}
                  h="32px"
                  w="140px"
                  cursor="pointer"
                />
                <Image src={pipeline} />
                <Text fontSize="14px" mt={4} cursor="pointer" _hover={{ textDecoration: "underline", color:  "#243B65"}}>
                  Why PHISHCODE?
                </Text>
              </HStack>

              <HStack spacing="10px" align="center">
                <Text cursor="pointer" fontSize="11px" mt={4}>
                  <Image src={icon_feedback_01_1} h="20px" w="30px" />
                </Text>

                <Button
                  bg="#0E1726"
                  color="white"
                  aria-label="Try for Free"
                  size="xs"
                  fontSize="11px"
                  borderRadius="3px"
                  fontWeight="normal"
                  w="70px"
                  h="26px"
                  _hover={{ bg: "#243B65" }}
                  onClick={() => navigate("/signup/step1")}
                >
                  Try for free
                </Button>

                <Button
                  variant="outline"
                  borderColor="black"
                  color="black"
                  aria-label="Sign In"
                  size="xs"
                  w="45px"
                  h="26px"
                  fontSize="11px"
                  fontWeight="normal"
                  borderRadius="3px"
                  _hover={{ bg: "gray.200" }}
                  onClick={() => navigate("/signin")}
                >
                  Sign in
                </Button>
              </HStack>
            </Flex>
          ) : (
            // Render the mobile version of the navbar if the screen is not large enough.
            <Box borderBottom="1px solid" borderColor="gray.200" w="100%">
              <Flex justify="space-between" align="center" position="relative">
                <Box
                  position="absolute"
                  left="50%"
                  transform="translateX(-50%)"
                >
                  <Image
                    src={phishcode_logoo_1}
                    h="20px"
                    w="90px"
                    cursor="pointer"
                  />
                </Box>
              </Flex>
            </Box>
          )}
        </Flex>
      </Container>

      {/* The drawer component that is displayed on mobile devices. */}
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
                "Teams",
                "Copilot",
                "Windows",
                "Surface",
                "Xbox",
                "Deals",
                "Small Business",
                "Support",
              ].map((item, index) => (
                <Box
                  key={index}
                  px={4}
                  py={3}
                  _hover={{ bg: "gray.400" }}
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
