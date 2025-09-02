import { Box, IconButton, VStack, Text, Link, Flex, HStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { BiPhone } from 'react-icons/bi'
import { CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const ContactBarSticky = () => {
  const [active, setActive] = useState<"email" | "phone" | null>(null);

  return (
    <Box
      position="fixed"
      top="50%"
      right="0"
      transform="translateY(-50%)"
      bg="#0E1726"    // <-- updated bg
      color="white"   // <-- all text white
      borderTopLeftRadius="md"
      borderBottomLeftRadius="md"
      boxShadow="md"
      zIndex="999"
      w={active ? "260px" : "50px"}
      transition="width 0.3s ease"
      overflow="hidden"
      py={3}
      px={active ? 4 : 1}
      textAlign="left"  // <-- left align text
    >
      {/* Icons (when inactive) */}
      {!active && (
        <VStack spacing={2} opacity={active ? 0 : 1} transition="opacity 0.2s ease">
          <IconButton
            aria-label="Email"
            icon={<HiOutlineMail />}
            color="white"
            bg="transparent"
            _hover={{ bg: 'blue.700' }}
            fontSize="18px"
            onClick={() => setActive('email')}
          />
          <IconButton
            aria-label="Phone"
            icon={<BiPhone />}
            color="white"
            bg="transparent"
            _hover={{ bg: 'blue.700' }}
            fontSize="18px"
            onClick={() => setActive('phone')}
          />
        </VStack>
      )}

      {/* Popup Content */}
      {active && (
        <Box opacity={active ? 1 : 0} transition="opacity 0.3s ease">
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontWeight="bold" fontSize="sm">
              {active === 'email' ? 'Contact us' : 'Call us'}
            </Text>
            <IconButton
              aria-label="Close"
              icon={<CloseIcon boxSize={3} />}
              size="sm"
              bg="transparent"
              color="white"
              _hover={{ bg: 'blue.700' }}
              onClick={() => setActive(null)}
            />
          </Flex>

          {active === 'email' && (
            <HStack spacing={2} align="center">
              <HiOutlineMail />
              <Link as={RouterLink} to='/contact-us' _hover={{ textDecoration: 'underline' }} fontSize='sm' color='white'>
                Contact now
              </Link>
            </HStack>
          )}

          {active === 'phone' && (
            <Box>
              <HStack spacing={2} align="center" mb={1}>
                <BiPhone />
                <Link
                  href="tel:+18006427676"
                  _hover={{ textDecoration: 'underline' }}
                  fontSize="sm"
                  color="white"
                >
                  (000) 000-0000
                </Link>
              </HStack>
              <Text fontSize="xs">Available M-F 6 AM to 6 PM PT</Text>
            </Box>
          )}
        </Box>
      )}
    </Box>
  )
}

export default ContactBarSticky
