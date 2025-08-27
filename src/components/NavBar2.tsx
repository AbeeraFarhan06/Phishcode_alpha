// This component renders the second navigation bar, which is a sticky bar that highlights the current section of the page.
// It uses IntersectionObserver to detect which section is currently in view and updates the active link accordingly.

import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { useNavigate } from "react-router-dom";

// An array of the menu items, which correspond to the IDs of the sections on the page.
const menuItems = ["Overview", "Impact", "Approach", "Resources", "Next steps"];

const NavBar2 = () => {
  const navigate = useNavigate();
  // State to keep track of the currently active menu item.
  const [activeItem, setActiveItem] = useState("Overview");
  // State to control the visibility of the mobile menu.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // A ref to keep track of whether the user is currently scrolling as a result of clicking a menu item.
  const isClickScrolling = useRef(false);

  // This function handles the click event on a menu item.
  // It scrolls the corresponding section into view and updates the active item.
  const handleScroll = (item: string) => {
    setActiveItem(item);
    isClickScrolling.current = true;
    const sectionId = item.replace(/\s+/g, "-");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // close menu after click
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  // This effect sets up the IntersectionObserver to track which section is currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];

        if (visibleEntry) {
          const visibleId = visibleEntry.target.id.replace(/-/g, " ");
          const formattedName =
            visibleId.charAt(0).toUpperCase() + visibleId.slice(1);
          setActiveItem(formattedName);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    // Observe each of the sections.
    menuItems.forEach((item) => {
      const sectionId = item.replace(/\s+/g, "-");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    // Clean up the observer when the component unmounts.
    return () => observer.disconnect();
  }, []);

  return (
    <Box position="sticky" top="0" zIndex="999" bg="white" boxShadow="sm">
      <Container noVerticalPadding>
        {/* Desktop Navbar */}
        <Flex
          as="nav"
          justify="space-between"
          align="center"
          py="0.5rem"
          borderTop="1px solid #e2e8f0"
          display={{ base: "none", lg: "flex" }}
        >
          <HStack spacing="3.125rem">
            {" "}
            {/* 50px converted to rem */}
            {menuItems.map((item) => (
              <Box
                key={item}
                position="relative"
                pb="0.25rem"
                cursor="pointer"
                onClick={() => handleScroll(item)}
                _hover={{ color: "blue.800" }}
              >
                <Text
                  fontSize="0.875rem" // 14px to rem
                  fontWeight="medium"
                  mt={2}
                  color={activeItem === item ? "#0E1726" : "#989696ff"}
                >
                  {item}
                </Text>
                {/* The blue line under the active menu item. */}
                {activeItem === item && (
                  <Box
                    position="absolute"
                    bottom="-0.6rem"
                    left="50%"
                    transform="translateX(-50%)"
                    height="0.3125rem" // 5px to rem
                    width="100%"
                    bg="#0E1726"
                    borderRadius="full"
                  />
                )}
              </Box>
            ))}
          </HStack>

          <Button
            bg="#0E1726"
            color="white"
            fontWeight="semibold"
            fontSize="0.875rem" // 14px to rem
            px="1rem"
            py="0.5rem"
            h="2.375rem" // 38px to rem
            w="6.25rem" // 100px to rem
            borderRadius="lg"
            _hover={{ bg: "#243B65" }}
            onClick={() => navigate("/signup/step1")}
          >
            Try for free
          </Button>
        </Flex>

        {/* Mobile Navbar Header */}
        <Box
          display={{ base: "block", lg: "none" }}
          w="100%"
          borderBottom="0.25rem solid" // 4px to rem
          borderColor="#0E1726"
          py="1rem"
          px="1rem"
          bg="white"
        >
          <Flex
            justify="space-between"
            align="center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            cursor="pointer"
          >
            <Text fontSize="0.875rem" fontWeight="medium" color="blue.900">
              {activeItem}
            </Text>
            {isMobileMenuOpen ? (
              <ChevronUpIcon color="blue.900" boxSize={5} />
            ) : (
              <ChevronDownIcon color="blue.900" boxSize={5} />
            )}
          </Flex>
        </Box>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <Box
            display={{ base: "block", lg: "none" }}
            bg="white"
            px="1.5rem"
            py="0.5rem"
          >
            {menuItems.map((item) => (
              <Box
                key={item}
                py="0.5rem"
                px="0.5rem"
                borderRadius="md"
                cursor="pointer"
                bg={activeItem === item ? "gray.200" : "transparent"}
                display="flex"
                alignItems="center"
                onClick={() => handleScroll(item)}
              >
                {activeItem === item && (
                  <Box
                    w="0.25rem" // 4px to rem
                    h="1.25rem" // 20px to rem
                    bg="#0E1726"
                    borderRadius="full"
                    mr="0.75rem" // 3 spacing units to rem
                  />
                )}
                <Text fontSize="0.875rem" color="#0E1726">
                  {item}
                </Text>
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default NavBar2;
