// This component renders the second navigation bar, which is a sticky bar that highlights the current section of the page.
// It uses IntersectionObserver to detect which section is currently in view and updates the active link accordingly.

import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useEffect, useRef, useState } from 'react'

// An array of the menu items, which correspond to the IDs of the sections on the page.
const menuItems = [
  'Overview',
  'Impact',
  'Approach',
  'Resources',
  'Next steps',
]

const NavBar2 = () => {
  // State to keep track of the currently active menu item.
  const [activeItem, setActiveItem] = useState('Overview')
  // State to control the visibility of the mobile menu.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // A ref to keep track of whether the user is currently scrolling as a result of clicking a menu item.
  const isClickScrolling = useRef(false)

  // This function handles the click event on a menu item.
  // It scrolls the corresponding section into view and updates the active item.
  const handleScroll = (item: string) => {
    setActiveItem(item)
    isClickScrolling.current = true
    const sectionId = item.replace(/\s+/g, '-')
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false) // close menu after click
    setTimeout(() => {
      isClickScrolling.current = false
    }, 800)
  }

  // This effect sets up the IntersectionObserver to track which section is currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return

        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]

        if (visibleEntry) {
          const visibleId = visibleEntry.target.id.replace(/-/g, ' ')
          const formattedName =
            visibleId.charAt(0).toUpperCase() + visibleId.slice(1)
          setActiveItem(formattedName)
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    )

    // Observe each of the sections.
    menuItems.forEach((item) => {
      const sectionId = item.replace(/\s+/g, '-')
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    // Clean up the observer when the component unmounts.
    return () => observer.disconnect()
  }, [])

  return (
    <Box position="sticky" top="0" zIndex="999" bg="white" boxShadow="sm">
      {/* Desktop Navbar */}
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        px={16}
        py={2}
        borderTop="1px solid #e2e8f0"
        display={{ base: 'none', lg: 'flex' }}
        ml={8}
      >
        <HStack spacing="50px">
          {menuItems.map((item) => (
            <Box
              key={item}
              position="relative"
              pb={1}
              cursor="pointer"
              onClick={() => handleScroll(item)}
              _hover={{ color: 'blue.800' }}
            >
              <Text
                fontSize="14px"
                fontWeight="medium"
                color={activeItem === item ? '#0E1726' : '#989696ff'}
              >
                {item}
              </Text>
              {/* The blue line under the active menu item. */}
              {activeItem === item && (
                <Box
                  position="absolute"
                  bottom="-16px"
                  left="50%"
                  transform="translateX(-50%)"
                  height="5px"
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
          fontWeight="bold"
          fontSize={{ base: "sm", md: "14px" }}
          px={4}
          py={2}
          h="38px"
          w="100px"
          borderRadius="lg"
          _hover={{ bg: '#243B65' }}
        >
          Try for free
        </Button>
      </Flex>

      {/* Mobile Navbar Header */}
      <Box
        display={{ base: 'block', lg: 'none' }}
        w="100%"
        borderBottom="4px solid"
        borderColor="#0E1726"
        py={4}
        px={4}
        bg="white"
      >
        <Flex
          justify="space-between"
          align="center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          cursor="pointer"
        >
          <Text fontSize="14px" fontWeight="medium" color="blue.900">
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
        <Box display={{ base: 'block', lg: 'none' }} bg="white" px={6} py={2}>
          {menuItems.map((item) => (
            <Box
              key={item}
              py={2}
              px={2}
              borderRadius="md"
              cursor="pointer"
              bg={activeItem === item ? 'gray.200' : 'transparent'}
              display="flex"
              alignItems="center"
              onClick={() => handleScroll(item)}
            >
              {activeItem === item && (
                <Box
                  w="4px"
                  h="20px"
                  bg="#0E1726"
                  borderRadius="full"
                  mr={3}
                />
              )}
              <Text fontSize="14px" color="#0E1726">
                {item}
              </Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default NavBar2
