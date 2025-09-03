import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import Container from "../../components/Container";
import { useNavigate } from "react-router-dom";

// An array of the menu items, which correspond to the IDs of the sections on the page.
const menuItems = ["Secure your tomorrow", "Resources", "See the benefits"];

const NavBar2 = () => {
  const navigate = useNavigate();
  // State to keep track of the currently active menu item.
  const [activeItem, setActiveItem] = useState("Secure your tomorrow");
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
          <HStack
            spacing={{ base: "1rem", md: "2rem", lg: "2.5rem", xl: "3.125rem" }}
          >
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
                  fontSize="0.875rem"
                  fontWeight="medium"
                  mt={2}
                  color={activeItem === item ? "#0E1726" : "#989696ff"}
                  whiteSpace="nowrap"
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
                    height="0.3125rem"
                    width="100%"
                    bg="#0E1726"
                    borderRadius="full"
                  />
                )}
              </Box>
            ))}
          </HStack>

          <Box ml={{ base: "1rem", md: "2rem", lg: "3rem" }}>
            <Button
              bg="#0E1726"
              color="white"
              fontWeight="semibold"
              fontSize="0.875rem"
              px="1rem"
              py="0.5rem"
              h="2.375rem"
              w="auto"
              borderRadius="lg"
              _hover={{ bg: "#243B65" }}
              onClick={() => navigate("/signup/step1")}
            >
              Get the latest info
            </Button>
          </Box>
        </Flex>

        {/* Mobile Navbar */}
        <Box display={{ base: "block", lg: "none" }} w="100%" bg="white">
          {/* Mobile Header - Clickable to toggle dropdown */}
          <Flex
            justify="space-between"
            align="center"
            py="1rem"
            px="1rem"
            cursor="pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            bg="white"
            _hover={{ bg: "gray.50" }}
          >
            <Text fontSize="1rem" fontWeight="semibold" color="#0E1726">
              {activeItem}
            </Text>
            {isMobileMenuOpen ? (
              <ChevronUpIcon color="#0E1726" boxSize={5} />
            ) : (
              <ChevronDownIcon color="#0E1726" boxSize={5} />
            )}
          </Flex>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <Box
              bg="white"
              borderTop="1px solid"
              borderColor="gray.200"
              shadow="sm"
            >
              {menuItems.map((item, index) => (
                <Box
                  key={item}
                  py="0.75rem"
                  px="1rem"
                  cursor="pointer"
                  onClick={() => handleScroll(item)}
                  _hover={{ bg: "gray.50" }}
                  borderBottom={
                    index !== menuItems.length - 1 ? "1px solid" : "none"
                  }
                  borderColor="gray.100"
                >
                  <Text
                    fontSize="0.875rem"
                    color="#0E1726"
                    fontWeight={activeItem === item ? "semibold" : "normal"}
                  >
                    {item}
                  </Text>
                </Box>
              ))}

              {/* Mobile CTA Button */}
              <Box p="1rem" borderTop="1px solid" borderColor="gray.200">
                <Button
                  bg="#0E1726"
                  color="white"
                  fontWeight="semibold"
                  fontSize="0.875rem"
                  w="100%"
                  h="2.5rem"
                  borderRadius="lg"
                  _hover={{ bg: "#243B65" }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate("/signup/step1");
                  }}
                >
                  Get the latest info
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar2;
