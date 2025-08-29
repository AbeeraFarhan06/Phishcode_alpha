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
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import phishcode_logoo_1 from "../assets/logo/phishcode_logoo_1.png";
import icon_feedback_01_1 from "../assets/icons/icon_feedback_01_1.png";
import pipeline from "../assets/icons/pipeline.png";
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
      title: "Products",
      links: [],
    },
    {
      title: "Pricing",
      links: [],
    },
    {
      title: "Resources",
      links: [],
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
                <Text
                  fontSize="14px"
                  mt={4}
                  cursor="pointer"
                  _hover={{ textDecoration: "underline", color: "#243B65" }}
                >
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
            // Mobile Navbar
            <Box w="100%">
              <Flex justify="space-between" align="center" position="relative">
                {/* Hamburger menu */}
                <IconButton
                  aria-label="Open Menu"
                  icon={<HamburgerIcon w={4} h={4} color="#0E1726" />} // ✅ Proper hamburger icon
                  variant="ghost"
                  onClick={onOpen}
                />

                {/* Center logo */}
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

      {/* ✅ Drawer should be here, not inside Flex */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerCloseButton />
          <DrawerHeader bgColor="white">
            <Image src={phishcode_logoo_1} h="6" />
          </DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4}>
              {/* Sign in */}
              <Button
                variant="outline"
                w="full"
                borderColor="#0E1726" // ✅ blue border
                color="#0E1726" // ✅ blue text
                bg="white"
                _hover={{ bg: "#243B65" }}
                onClick={() => navigate("/signin")}
              >
                Sign in
              </Button>

              <Button
                bgColor="#0E1726"
                fontWeight="normal"
                w="full"
                _hover={{ bg: "#243B65" }}
                onClick={() => navigate("/signup/step1")}
              >
                Try for Free
              </Button>

              {/* Accordion Menu */}
              <Accordion allowToggle>
                {drawerItems.map((section, i) => (
                  <AccordionItem key={i}>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {section.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {section.links.map((link, j) => (
                        <Text
                          key={j}
                          px={2}
                          py={1}
                          cursor="pointer"
                          _hover={{ color: "blue.600" }}
                        >
                          {link}
                        </Text>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
