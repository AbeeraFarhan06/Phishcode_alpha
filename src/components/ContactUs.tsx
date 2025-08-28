import {
  Box,
  Flex,
  Text,
  Heading,
  Input,
  Select,
  Button,
  FormControl,
  FormLabel,
  VStack,
  Link,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import phishcode_logoo_1 from "../assets/logo/phishcode_logoo_1.png";
import contact_banner from "../assets/png imgs/contact_banner.png";

const ContactUs = () => {
  return (
    <Box bg="white">
      {/* Header */}
      <Flex as="header" px={6} py={3} borderBottom="1px solid #e5e5e5">
        <Flex ml={12}>
          <Image
            src={phishcode_logoo_1}
            h="32px"
            w="140px"
            cursor="pointer"
            mb={7}
          />
        </Flex>
      </Flex>

      <Flex>
        <Image src={contact_banner} />
      </Flex>

      {/* Hero Section */}
      <Flex direction={{ base: "column", lg: "row" }} p={12} gap={12}>
        {/* Left Content */}
        <Box flex="1" pl={12}>
          <Heading fontSize="37px" mb={4} fontWeight="semibold">
            Contact the PHISHCODE team
          </Heading>
          <Text fontSize="16px" mb={6}>
            Let's help you get started with PHISHCODE.
          </Text>
          <Text fontSize="16px" mb={4} textAlign="justify">
            Fill out the form and we'll have a PHISHCODE expert give you a call.
            Our team can answer your questions, provide expert guidance, and
            help you understand what PHISHCODE can do for your business.
          </Text>
        </Box>

        {/* Right Form */}
        <Box
          flex="1"
          border="1px solid #0E1726"
          borderRadius="md"
          p={8}
          ml={5}
          bg="white"
        >
          <Heading as="h2" fontSize="29px" mb={4} fontWeight="semibold">
            Contact me
          </Heading>
          <Text fontSize="16px" mb={4} textAlign="justify">
            If you are a current customer and need technical or billing support,
            please visit our <Link color="blue.500">support area</Link> or{" "}
            <Link color="blue.500">log in</Link> to your account to see more
            options.
          </Text>
          <Text fontSize="16px" mb={4}>
            Fill out the form and we'll be in touch.
          </Text>

          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel fontSize="16px">First name</FormLabel>
              <Input borderColor="#0E1726" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="16px">Last name</FormLabel>
              <Input borderColor="#0E1726" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="16px">Email</FormLabel>
              <Input type="email" borderColor="#0E1726" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="16px">Company name</FormLabel>
              <Input borderColor="#0E1726" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="16px">Company size</FormLabel>
              <Select placeholder="Company size" borderColor="#0E1726">
                <option>1</option>
                <option>2-4</option>
                <option>5-9</option>
                <option>10-24</option>
                <option>25-49</option>
                <option>50-249</option>
                <option>250-999</option>
                <option>1000+</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="16px">Job role</FormLabel>
              <Input borderColor="#0E1726" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="16px">Phone</FormLabel>
              <Flex gap={2}>
                <Select
                  placeholder="Country Code *"
                  maxW="40%"
                  borderColor="#0E1726"
                >
                  <option>+1</option>
                  <option>+44</option>
                  <option>+91</option>
                </Select>
                <Input borderColor="#0E1726" />
              </Flex>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="16px">Country/Region</FormLabel>
              <Select placeholder="Select..." borderColor="#0E1726">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>India</option>
              </Select>
            </FormControl>

            <Button bg="#0E1726" color="white" _hover={{ bg: "#243B65" }} w="12rem">
              Contact me
            </Button>

            <Text fontSize="xs" color="#0E1726">
              * Please complete required fields
            </Text>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex
        as="footer"
        bgColor="#f1f2f379"
        justify="left"
        align="center"
        borderTop="1px solid #8c8c8d79"
        px={6}
        py={3}
        fontSize="12px"
        color="gray.600"
      >
        <Text pt={3} ml={14}>
          <Link>Your Privacy Choices</Link> | <Link>Trademarks</Link> |{" "}
          <Link>Privacy & Cookies</Link> | © PHISHCODE
        </Text>
      </Flex>
    </Box>
  );
};

export default ContactUs;
