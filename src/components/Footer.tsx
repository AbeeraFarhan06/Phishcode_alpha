import React from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaLinkedinIn,
} from "react-icons/fa";
import { TbBrandTwitter } from "react-icons/tb";
import { ChevronDownIcon } from "@chakra-ui/icons";
import phishcode_logoo_1 from "../assets/logo/phishcode_logoo_1.png";

// ---------------- Footer Data ----------------
const socialIcons = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: TbBrandTwitter, label: "Twitter", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaPhone, label: "Phone", href: "#" },
];

const footerSections = [
  {
    title: "Products",
    links: [
      "Overview",
      "Impact",
      "Approach",
      "Resources",
      "Next Step",
      "Email",
      "Sign In",
    ],
  },
  {
    title: "Our AI",
    links: ["Cyber AI", "AI Research Centre"],
  },
  {
    title: "Company",
    links: ["Company Overview", "Contact Us", "Free Trial"],
  },
  {
    title: "Resources",
    links: ["All Resources", "Blog", "Demo", "Infographics"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Cookie Policy"],
  },
];

// ---------------- Footer Component ----------------
export default function Footer() {
  return (
    <Box bg="#f1f2f379" py={14}>
      <Box maxWidth="1280px" mx="auto" px={10}>
        <Box ml={8}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="flex-start"
            wrap="wrap"
            gap={10}
            mb={8}
          >
            {/* Left Section */}
            <VStack align="flex-start" spacing={6} ml={7}>
              <Box w="140px" textAlign="left">
                <Image src={phishcode_logoo_1} alt="PhishCode Logo" />
                <Text fontSize="12px" color="#0E1726" fontWeight="medium" mt="0">
                  Remediates human errors
                </Text>
              </Box>
              {/* Social Icons */}
              <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} mb={3}>
                {socialIcons.map(({ icon: Icon, label, href }, i) => (
                  <IconButton
                    key={i}
                    as="a"
                    href={href}
                    aria-label={label}
                    color="#0E1726"
                    icon={<Icon />}
                    rounded="full"
                    border="2px solid"
                    borderColor="#0E1726"
                    variant="ghost"
                    boxSize="12"
                  />
                ))}
              </SimpleGrid>
              {/* Language Selector */}
              <Menu>
                <MenuButton
                  as={Text}
                  variant="ghost"
                  color="#0E1726"
                  fontSize="14px"
                  fontWeight="semibold"
                >
                  Language <ChevronDownIcon />
                </MenuButton>
                <MenuList bgColor="white">
                  <MenuItem
                    bgColor="white"
                    color="#0E1726"
                    _hover={{ bg: "gray.100" }}
                  >
                    English
                  </MenuItem>
                  <MenuItem
                    bgColor="white"
                    color="#0E1726"
                    _hover={{ bg: "gray.100" }}
                  >
                    Spanish
                  </MenuItem>
                  <MenuItem
                    bgColor="white"
                    color="#0E1726"
                    _hover={{ bg: "gray.100" }}
                  >
                    French
                  </MenuItem>
                </MenuList>
              </Menu>
            </VStack>
            {/* Right Section */}
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={10}
              flex="1"
              minChildWidth="180px"
              ml="100px"
            >
              {/* Column 1: Products */}
              <VStack align="flex-start" spacing={2}>
                <Text fontWeight="semibold">{footerSections[0].title}</Text>
                <VStack align="flex-start" spacing={2} color="#A4A4A4">
                  {footerSections[0].links.map((link, j) => (
                    <Link key={j}>{link}</Link>
                  ))}
                </VStack>
              </VStack>
              {/* Column 2: Our AI + Company */}
              <VStack align="flex-start" spacing={8}>
                <Box>
                  <Text fontWeight="semibold" mb={2}>{footerSections[1].title}</Text>
                  <VStack align="flex-start" spacing={2} color="#A4A4A4">
                    {footerSections[1].links.map((link, j) => (
                      <Link key={j}>{link}</Link>
                    ))}
                  </VStack>
                </Box>
                <Box>
                  <Text fontWeight="semibold" mb={2}>{footerSections[2].title}</Text>
                  <VStack align="flex-start" spacing={2} color="#A4A4A4">
                    {footerSections[2].links.map((link, j) => (
                      <Link key={j}>{link}</Link>
                    ))}
                  </VStack>
                </Box>
              </VStack>
              {/* Column 3: Resources + Legal */}
              <VStack align="flex-start" spacing={8}>
                <Box>
                  <Text fontWeight="semibold" mb={2}>{footerSections[3].title}</Text>
                  <VStack align="flex-start" spacing={2} color="#A4A4A4">
                    {footerSections[3].links.map((link, j) => (
                      <Link key={j}>{link}</Link>
                    ))}
                  </VStack>
                </Box>
                <Box>
                  <Text fontWeight="semibold" mb={2}>{footerSections[4].title}</Text>
                  <VStack align="flex-start" spacing={2} color="#A4A4A4">
                    {footerSections[4].links.map((link, j) => (
                      <Link key={j}>{link}</Link>
                    ))}
                  </VStack>
                </Box>
              </VStack>
            </SimpleGrid>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
